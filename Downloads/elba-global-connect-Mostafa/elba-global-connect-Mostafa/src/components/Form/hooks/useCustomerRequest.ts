import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { submitCustomerRequest } from "@/components/Form/services/customerRequest.service";
import { log } from "console";

type Args = {
  brandId: number;
  productId: number | null;
  domain: string;
};

const empty = (v: string) => !v || !v.trim();

const DEFAULT_DOMAIN = "https://elba-eg.com";


export function useCustomerRequest({ brandId, productId, domain }: Args) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    full_name: "",
    phone_number: "",
    whatsapp_number: "",
    whatsapp_number_code: "+20",
    address_customer: "",
    email: "",
    city: "",
    governorate: "",
    region: "",
    address_order: "",
    status: "pending",
    problem_description: "",
    warranty_status: 1,
    note: "",
    domain,
  });

  // تحديث domain لو اتغير
  useEffect(() => {
  setForm((prev) => ({ ...prev, domain }));
}, [domain]);


  const setField = (key: keyof typeof form, value: any) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const validate = () => {
    if (!brandId || !productId) return false;
    if (empty(form.full_name)) return false;
    if (empty(form.phone_number)) return false;
    if (empty(form.governorate)) return false;
    if (empty(form.address_order)) return false;
    if (empty(form.problem_description)) return false;
    return true;
  };

const submit = async (isRTL: boolean, overrides?: Partial<typeof form>) => {
  const merged = { ...form, ...(overrides || {}) };

  // ✅ لو الجهاز مش متحدد
  if (!brandId || !productId) {
    toast.error(isRTL ? "اختار الجهاز" : "Select device");
    return false;
  }

  // ✅ validate على merged
  const valid =
    !empty(merged.full_name) &&
    !empty(merged.phone_number) &&
    !empty(merged.governorate) &&
    !empty(merged.address_order) &&
    !empty(merged.problem_description);

  if (!valid) {
    toast.error(
      isRTL
        ? "يرجى ملء الحقول المطلوبة"
        : "Please fill required fields"
    );
    return false;
  }

  setLoading(true);
  try {
    const payload = {
      ...merged,

      address_customer: merged.address_customer?.trim() || merged.address_order,
      city: merged.city?.trim() || merged.governorate,
      region: merged.region?.trim() || "other",
      domain: merged.domain?.trim() || domain || DEFAULT_DOMAIN,

      whatsapp_number: merged.whatsapp_number?.trim()
        ? merged.whatsapp_number
        : merged.phone_number,
    };
console.log("Brand ID before submit:", brandId);
console.log("Product ID before submit:", productId);
console.log("Payload being sent:", payload);
    await submitCustomerRequest({
      brandId,
      productId: productId!,
      payload,
    });

    toast.success(isRTL ? "تم إرسال الطلب بنجاح" : "Request sent successfully");
    setOpen(false);
    console.log('')

    setForm({
      full_name: "",
      phone_number: "",
      whatsapp_number: "",
      whatsapp_number_code: "+20",
      address_customer: "",
      email: "",
      city: "",
      governorate: "",
      region: "",
      address_order: "",
      status: "pending",
      problem_description: "",
      warranty_status: 1,
      note: "",
      domain,
    });

    return true;
  } catch (e: any) {
    toast.error(e?.message || (isRTL ? "فشل الإرسال" : "Submit failed"));
    return false;
  } finally {
    setLoading(false);
  }
};


  return { open, setOpen, loading, form, setField, submit };
}
