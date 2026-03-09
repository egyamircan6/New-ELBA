


// customerRequest.service.ts
const BASE_URL = "https://customers.american-softwares.com/api";

export async function submitCustomerRequest({
  brandId,
  productId,
  payload,
}: {
  brandId: number;
  productId: number;
  payload: Record<string, any>;
}) 
{
  const url = `${BASE_URL}/store/customer/request/${brandId}/${productId}`;

  const fd = new FormData();
  Object.entries(payload).forEach(([key, value]) => {
    fd.append(key, value ?? "");
  });

  console.log("POST =>", url);
  console.log("BODY =>", Object.fromEntries(fd as any));

  const res = await fetch(url, {
  method: "POST",
  body: fd,
  headers: {
    Accept: "application/json",
    // متحطش Content-Type مع FormData
  },
});

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || "Request failed");
  }

  return res.json();
}
