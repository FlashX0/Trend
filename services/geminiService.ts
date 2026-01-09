
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAiSupportResponse = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction: `
          أنت المساعد الذكي لمحل "TREND Store" (تريند ستور).
          المحل يقع في: ش١٠ المعادى متفرع من حسنين دسوقى حدائق المعادى امام البن اليمنى الفرسان.
          أرقام التواصل: 01147543787 - 01110790830 - 01127560025.
          خدماتنا: بيع وشراء الأجهزة المستعملة والجديدة، الصيانة، الصيانة المنزلية (نجيلك لحد البيت)، والإكسسوارات.
          لدينا منتجات مميزة:
          1. Anker Soundcore Liberty 4 NC بسعر 4850 ج.م.
          2. شاحن Anker Nano 20W متاح باللونين (الأبيض والأسود) بسعر 750 ج.م.
          3. شاحن Anker Zolo 30W بسعر 950 ج.م.
          4. آيفون 16 برو ماكس جديد وآيفون 14 برو مستعمل حالة زيرو.
          رقم الصيانة المنزلية المباشر هو: 01147543787.
          كن ودوداً جداً وباللهجة المصرية المحببة، وأجب باختصار ودقة.
        `,
        temperature: 0.7,
      },
    });
    return response.text || "عذراً، حدث خطأ بسيط. ممكن تسأل تاني؟";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "أنا حالياً مشغول شوية، جرب تكلمنا واتساب أسرع!";
  }
};
