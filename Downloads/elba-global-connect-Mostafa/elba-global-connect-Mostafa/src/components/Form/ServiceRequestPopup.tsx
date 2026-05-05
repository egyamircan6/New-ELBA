import { useEffect, useMemo, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Send, User, Phone, Mail, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

import { useCustomerRequest } from "@/components/Form/hooks/useCustomerRequest";
import { DEVICES, BRAND_ID } from "@/constants/devices";
import { EGYPT_GOVERNORATES } from "@/constants/egyptGovernorates";
import { ISSUE_OPTIONS } from "@/constants/issues";

interface ServiceRequestPopupProps {
  isOpen: boolean;
  onClose: () => void;
  showOnLoad?: boolean;
  domain: string; // مثال: https://www.elba-eg.com
}

const ServiceRequestPopup: React.FC<ServiceRequestPopupProps> = ({
  isOpen,
  onClose,
  showOnLoad = false,
  domain,
}) => {
  const { isRTL } = useLanguage();

  const [internalOpen, setInternalOpen] = useState(false);
  const actualOpen = isOpen || internalOpen;

  // ✅ device اختيار من DEVICES الجديدة
  const [productId, setProductId] = useState<number | null>(null);

  const selectedProduct = useMemo(
    () => DEVICES.find((d) => d.id === productId) || null,
    [productId],
  );

  // ✅ issue list حسب الجهاز
  const issueList = useMemo(() => {
    if (!selectedProduct) return [];
    const key = selectedProduct.slug; // أو name حسب تصميم issues عندك
    return ISSUE_OPTIONS[key] || [];
  }, [selectedProduct]);

  const [issue, setIssue] = useState("");

  // ✅ جديد: ضمن الضمان / خارج الضمان (1 / 0)
  const [inWarranty, setInWarranty] = useState<"1" | "0" | "">("");

  // ✅ hook + submit للـ API
  const { open, setOpen, loading, form, setField, submit } = useCustomerRequest(
    {
      brandId: BRAND_ID,
      productId,
      domain,
    },
  );

  // ✅ sync open/close مع الأب
  useEffect(() => {
    setOpen(actualOpen);
  }, [actualOpen, setOpen]);

  // ✅ show on load
  useEffect(() => {
    if (!showOnLoad) return;
    const hasSeenPopup = localStorage.getItem("hasSeenServicePopup");
    if (hasSeenPopup) return;

    const timer = setTimeout(() => setInternalOpen(true), 5000);
    return () => clearTimeout(timer);
  }, [showOnLoad]);

  const resetForm = () => {
    setProductId(null);
    setIssue("");
    setInWarranty("");
    setField("full_name", "");
    setField("phone_number", "");
    setField("email", "");
    setField("governorate", "");
    setField("address_order", "");
    setField("note", "");
  };

  const handleClose = () => {
    setInternalOpen(false);
    onClose();
    if (showOnLoad) localStorage.setItem("hasSeenServicePopup", "true");
    resetForm();
  };

  const handleSend = async () => {
    // ✅ validations
    if (!productId) {
      toast.error(isRTL ? "اختر الجهاز أولاً" : "Select device first");
      return;
    }
    if (!issue) {
      toast.error(isRTL ? "اختر العطل أولاً" : "Select issue first");
      return;
    }
    if (inWarranty === "") {
      toast.error(isRTL ? "اختر حالة الضمان" : "Select warranty status");
      return;
    }

    // ✅ final problem = issue + note
    const extra = form.note?.trim();
    const finalProblem = extra ? `${issue} - ${extra}` : issue;

    const ok = await submit(isRTL, {
      problem_description: finalProblem,
      warranty_status: Number(inWarranty), // ✅ 1 أو 0
    });

    if (ok) {
      resetForm();
      handleClose();
    }
  };

  return (
    <Dialog open={open} onOpenChange={(v) => !v && handleClose()}>
      <DialogContent
        className={cn(
          "sm:max-w-[520px] bg-background border-border",
          isRTL ? "font-cairo text-right" : "font-sans",
        )}
      >
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-2">
            <span className="text-primary">{isRTL ? "احجز" : "Book"}</span>{" "}
            <span className="text-foreground">
              {isRTL ? "خدمة الصيانة" : "Maintenance Service"}
            </span>
          </DialogTitle>

          <p className="text-center text-muted-foreground">
            {isRTL
              ? "املأ البيانات التالية وسنتواصل معك في أقرب وقت"
              : "Fill in the following details and we will contact you soon"}
          </p>
        </DialogHeader>

        <form className="space-y-4 mt-4" onSubmit={(e) => e.preventDefault()}>
          {/* Full name */}
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder={isRTL ? "الاسم الكامل *" : "Full Name *"}
              value={form.full_name}
              onChange={(e) => setField("full_name", e.target.value)}
              className="pl-10 bg-card border-border"
            />
          </div>

          {/* Phone */}
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder={isRTL ? "رقم الهاتف *" : "Phone Number *"}
              value={form.phone_number}
              onChange={(e) => setField("phone_number", e.target.value)}
              className={cn(
                "pl-10 bg-card border-border",
                isRTL ? "text-right" : "",
              )}
              type="tel"
              dir="ltr"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder={
                isRTL
                  ? "البريد الإلكتروني (اختياري)"
                  : "Email Address (optional)"
              }
              value={form.email}
              onChange={(e) => setField("email", e.target.value)}
              className="pl-10 bg-card border-border"
              type="email"
            />
          </div>

          {/* Device */}
          <Select
            value={productId ? String(productId) : ""}
            onValueChange={(v) => {
              setProductId(Number(v));
              setIssue("");
            }}
          >
            <SelectTrigger
              className={cn(
                "bg-card border-border",
                isRTL ? "justify-center" : "",
              )}
            >
              <SelectValue
                placeholder={isRTL ? "اختر الجهاز *" : "Select Device *"}
                className={cn(isRTL ? "text-right" : "")}
              />
            </SelectTrigger>
            <SelectContent className="bg-card border-border justify-start  ">
              {DEVICES.map((d) => (
                <SelectItem
                  key={d.id}
                  value={String(d.id)}
                  className="justify-center"
                >
                  {d.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Issue */}
          <Select value={issue} onValueChange={setIssue} disabled={!productId}>
            <SelectTrigger className="bg-card border-border">
              <Wrench className="h-5 w-5 text-muted-foreground mr-2" />
              <SelectValue
                placeholder={
                  !productId
                    ? isRTL
                      ? "اختر الجهاز أولاً"
                      : "Select device first"
                    : isRTL
                      ? "اختر العطل *"
                      : "Select Issue *"
                }
              />
            </SelectTrigger>
            <SelectContent className="bg-card border-border">
              {issueList.map((x) => (
                <SelectItem key={x} value={x}>
                  {x}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* ✅ Warranty */}
          <Select
            value={inWarranty}
            onValueChange={(v) => setInWarranty(v as "1" | "0")}
          >
            <SelectTrigger
              className={cn(
                "bg-card border-border",
                isRTL ? "text-right " : "",
              )}
            >
              <Wrench className="h-5 w-5 text-muted-foreground mr-2" />

              <SelectValue
                placeholder={isRTL ? "حالة الضمان *" : "Warranty Status *"}
                className="self-start"
              />
            </SelectTrigger>
            <SelectContent className="bg-card border-border text-right">
              <SelectItem value="1">
                {isRTL ? "ضمن الضمان" : "In Warranty"}
              </SelectItem>
              <SelectItem value="0">
                {isRTL ? "خارج الضمان" : "Out of Warranty"}
              </SelectItem>
            </SelectContent>
          </Select>

          {/* Governorate */}
          <Select
            value={form.governorate}
            onValueChange={(v) => setField("governorate", v)}
          >
            <SelectTrigger className="bg-card border-border">
              <SelectValue
                placeholder={isRTL ? "اختر المحافظة *" : "Select Governorate *"}
              />
            </SelectTrigger>
            <SelectContent className="bg-card border-border max-h-[260px] overflow-auto ">
              {EGYPT_GOVERNORATES.map((g) => (
                <SelectItem key={g} value={g}>
                  {g}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Address */}
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder={isRTL ? "العنوان بالتفصيل *" : "Full Address *"}
              value={form.address_order}
              onChange={(e) => setField("address_order", e.target.value)}
              className="pl-10 bg-card border-border"
            />
          </div>

          {/* Note */}
          <Textarea
            placeholder={
              isRTL ? "ملاحظات إضافية (اختياري)" : "Extra notes (optional)"
            }
            value={form.note}
            onChange={(e) => setField("note", e.target.value)}
            className="bg-card border-border min-h-[90px]"
          />

          {/* Submit */}
          <Button
            type="button"
            className="w-full gap-2"
            disabled={loading}
            onClick={handleSend}
          >
            <Send className="h-5 w-5" />
            {loading
              ? isRTL
                ? "جاري الإرسال..."
                : "Sending..."
              : isRTL
                ? "إرسال الطلب"
                : "Submit Request"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceRequestPopup;
