import DOMPurify from "dompurify";

export const decodeHtml = (str = "") => {
  const el = document.createElement("textarea");
  el.innerHTML = str;
  return el.value;
};

export const decodeAndUnwrap = (input = "") => {
  const decoded = decodeHtml(input);
  const doc = new DOMParser().parseFromString(decoded, "text/html");
  const body = doc.body;

  if (
    body.children.length === 1 &&
    body.firstElementChild?.tagName === "P"
  ) {
    return body.firstElementChild.innerHTML;
  }

  return body.innerHTML;
};

export const sanitizeHtml = (html = "") =>
  DOMPurify.sanitize(decodeAndUnwrap(html), {
    ADD_ATTR: ["target", "rel", "dir", "style"],
  });
