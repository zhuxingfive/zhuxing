// Intent-driven inquiry presets.
// Per the handbook (4.1): clicking a preset auto-fills the message box with
// a ready-made professional inquiry, lowering the buyer's communication barrier.

export type InquiryIntent = {
  id: string;
  label: string;
  presetMessage: string;
};

export const inquiryIntents: InquiryIntent[] = [
  {
    id: "request-quote",
    label: "Request a Quote",
    presetMessage:
      "Hello, I would like to request a price quote. Please share your pricing, MOQ, and lead time for the following product(s): "
  },
  {
    id: "request-sample",
    label: "Request Sample Kit",
    presetMessage:
      "Hello, I would like to request a sample kit before placing a bulk order. Please advise on sample cost, shipping options, and lead time."
  },
  {
    id: "customization",
    label: "Customization Inquiry",
    presetMessage:
      "Hello, we are interested in customization. Please share your available options (colors, configurations, packaging), minimum order quantity, and process."
  },
  {
    id: "general",
    label: "General Inquiry",
    presetMessage: ""
  }
];

export const enquiryTypes = [
  "Product question",
  "Quotation request",
  "Sample request",
  "Customization",
  "After-sales / support",
  "Other"
];
