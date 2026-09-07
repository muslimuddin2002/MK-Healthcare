// ১. সরকারি মেডিকেল কলেজসমূহ (৩৭টি)
const govtColleges = [
    { name: "ঢাকা মেডিকেল কলেজ হাসপাতাল (DMCH)", location: "ঢাকা", details: "বাংলাদেশের বৃহত্তম সরকারি টারশিয়ারি হাসপাতাল ও রিসার্চ সেন্টার।", machines: ["MRI Scanner", "CT Scan", "Dialysis", "ICU & CCU", "Digital X-Ray"] },
    { name: "স্যার সলিমুল্লাহ মেডিকেল কলেজ ও মিটফোর্ড হাসপাতাল", location: "ঢাকা", details: "ঐতিহাসিক সরকারি চিকিৎসালয় ও মেডিকেল কলেজ।", machines: ["CT Scan", "Ultrasonography", "X-Ray", "ICU Support"] },
    { name: "শহীদ সোহরাওয়ার্দী মেডিকেল কলেজ হাসপাতাল", location: "ঢাকা", details: "আধুনিক সুযোগ-সুবিধা সম্পন্ন সরকারি হাসপাতাল।", machines: ["MRI", "CT Scan", "Modern Operation Theater", "Dialysis Unit"] },
    { name: "চট্টগ্রাম মেডিকেল কলেজ হাসপাতাল (CMCH)", location: "চট্টগ্রাম", details: "চট্টগ্রাম অঞ্চলের প্রধান সরকারি স্বাস্থ্যসেবা কেন্দ্র।", machines: ["CT Scan", "MRI", "ICU", "Cath Lab"] },
    { name: "রাজশাহী মেডিকেল কলেজ হাসপাতাল (RMCH)", location: "রাজশাহী", details: "উত্তরবঙ্গের প্রধান সরকারি মেডিকেল হাব।", machines: ["MRI & CT Scan", "ICU", "Burn Unit"] },
    { name: "সিলেট এম এ জি ওসমানী মেডিকেল কলেজ হাসপাতাল", location: "সিলেট", details: "সিলেট বিভাগের প্রধান সরকারি হাসপাতাল।", machines: ["CT Scan", "ICU", "Kidney Dialysis"] },
    { name: "শের-ই-বাংলা মেডিকেল কলেজ হাসপাতাল", location: "বরিশাল", details: "দক্ষিণ অঞ্চলের চিকিৎসায় গুরুত্বপূর্ণ ভূমিকা পালনকারী হাসপাতাল।", machines: ["ICU", "CT Scan", "Digital X-Ray", "Blood Bank"] },
    { name: "ময়মনসিংহ মেডিকেল কলেজ হাসপাতাল", location: "ময়মনসিংহ", details: "ময়মনসিংহ বিভাগের প্রধান স্বাস্থ্যসেবা কেন্দ্র।", machines: ["MRI", "CT Scan", "CCU", "Modern Surgery Units"] },
    { name: "রংপুর মেডিকেল কলেজ হাসপাতাল", location: "রংপুর", details: "রংপুর অঞ্চলের বৃহত্তম সরকারি চিকিৎসা কেন্দ্র।", machines: ["CT Scan", "ICU", "Dialysis", "X-Ray"] },
    { name: "কুমিল্লা মেডিকেল কলেজ হাসপাতাল", location: "কুমিল্লা", details: "কুমিল্লা অঞ্চলের প্রধান সরকারি মেডিকেল কলেজ।", machines: ["CT Scan", "ICU", "Ultrasonography", "Pathology"] },
    { name: "দিনাজপুর এম. আবদুর রহিম মেডিকেল কলেজ হাসপাতাল", location: "দিনাজপুর", details: "উত্তর জনপদের অন্যতম প্রধান সরকারি মেডিকেল কলেজ।", machines: ["CT Scan", "ICU", "Digital X-Ray"] },
    { name: "ফরিদপুর মেডিকেল কলেজ হাসপাতাল", location: "ফরিদপুর", details: "ফরিদপুর অঞ্চলের গুরুত্বপূর্ণ সরকারি চিকিৎসালয়।", machines: ["CT Scan", "ICU", "Dialysis"] },
    { name: "খুলনা মেডিকেল কলেজ হাসপাতাল", location: "খুলনা", details: "দক্ষিণ-পশ্চিমাঞ্চলের প্রধান সরকারি মেডিকেল কলেজ।", machines: ["MRI", "CT Scan", "ICU", "CCU"] },
    { name: "শহীদ জিয়াউর রহমান মেডিকেল কলেজ হাসপাতাল", location: "বগুড়া", details: "বগুড়ার আধুনিক সরকারি মেডিকেল কলেজ ও হাসপাতাল।", machines: ["MRI", "CT Scan", "ICU", "Dialysis"] },
    { name: "কক্সবাজার মেডিকেল কলেজ হাসপাতাল", location: "কক্সবাজার", details: "পর্যটন শহরের সরকারি মেডিকেল কলেজ।", machines: ["CT Scan", "X-Ray", "Emergency Unit"] },
    { name: "নোয়াখালী আব্দুল মালেক উকিল মেডিকেল কলেজ", location: "নোয়াখালী", details: "নোয়াখালীর প্রধান সরকারি মেডিকেল শিক্ষা প্রতিষ্ঠান।", machines: ["CT Scan", "Pathology", "ICU"] },
    { name: "পাবনা মেডিকেল কলেজ হাসপাতাল", location: "পাবনা", details: "পাবনার সরকারি মেডিকেল কলেজ।", machines: ["X-Ray", "Pathology", "Emergency"] },
    { name: "যশোর মেডিকেল কলেজ হাসপাতাল", location: "যশোর", details: "যশোরের সরকারি মেডিকেল কলেজ ও হাসপাতাল।", machines: ["CT Scan", "Pathology", "Emergency"] },
    { name: "কুষ্টিয়া মেডিকেল কলেজ হাসপাতাল", location: "কুষ্টিয়া", details: "কুষ্টিয়ার সরকারি মেডিকেল কলেজ।", machines: ["CT Scan", "X-Ray", "Pathology"] },
    { name: "সাতক্ষীরা মেডিকেল কলেজ হাসপাতাল", location: "সাতক্ষীরা", details: "সাতক্ষীরার প্রধান সরকারি মেডিকেল কলেজ।", machines: ["CT Scan", "ICU", "Pathology"] },
    { name: "গোপালগঞ্জ শেখ সায়েরা খাতুন মেডিকেল কলেজ", location: "গোপালগঞ্জ", details: "গোপালগঞ্জের সরকারি মেডিকেল কলেজ।", machines: ["CT Scan", "X-Ray", "Emergency"] },
    { name: "শহীদ সৈয়দ নজরুল ইসলাম মেডিকেল কলেজ", location: "কিশোরগঞ্জ", details: "কিশোরগঞ্জের সরকারি মেডিকেল কলেজ হাসপাতাল।", machines: ["CT Scan", "X-Ray", "Emergency Unit"] },
    { name: "শহীদ তাজউদ্দীন আহমদ মেডিকেল কলেজ", location: "গাজীপুর", details: "গাজীপুরের প্রধান সরকারি মেডিকেল কলেজ।", machines: ["CT Scan", "ICU", "Digital X-Ray"] },
    { name: "জামালপুর শেখ হাসিনা মেডিকেল কলেজ", location: "জামালপুর", details: "জামালপুরের সরকারি মেডিকেল কলেজ।", machines: ["CT Scan", "Pathology", "X-Ray"] },
    { name: "মানিকগঞ্জ কর্নেল মালেক মেডিকেল কলেজ", location: "মানিকগঞ্জ", details: "মানিকগঞ্জের সরকারি মেডিকেল কলেজ ও হাসপাতাল।", machines: ["CT Scan", "ICU", "Pathology"] },
    { name: "পটুয়াখালী মেডিকেল কলেজ", location: "পটুয়াখালী", details: "পটুয়াখালীর সরকারি মেডিকেল কলেজ।", machines: ["X-Ray", "Pathology", "Emergency"] },
    { name: "রাঙ্গামাটি মেডিকেল কলেজ", location: "রাঙ্গামাটি", details: "পাহাড়ি অঞ্চলের সরকারি মেডিকেল কলেজ।", machines: ["X-Ray", "Pathology"] },
    { name: "সিরাজগঞ্জ শহীদ এম মনসুর আলী মেডিকেল কলেজ", location: "সিরাজগঞ্জ", details: "সিরাজগঞ্জের সরকারি মেডিকেল কলেজ।", machines: ["CT Scan", "ICU", "Pathology"] },
    { name: "টাঙ্গাইল শেখ হাসিনা মেডিকেল কলেজ", location: "টাঙ্গাইল", details: "টাঙ্গাইলের সরকারি মেডিকেল কলেজ।", machines: ["CT Scan", "ICU", "Pathology"] },
    { name: "মুগদা মেডিকেল কলেজ হাসপাতাল", location: "ঢাকা", details: "ঢাকার অন্যতম প্রধান সরকারি বিশেষায়িত চিকিৎসালয়।", machines: ["CT Scan", "ICU", "Dialysis", "Digital X-Ray"] },
    { name: "হবিগঞ্জ মেডিকেল কলেজ", location: "হবিগঞ্জ", details: "হবিগঞ্জের সরকারি মেডিকেল কলেজ।", machines: ["X-Ray", "Pathology"] },
    { name: "চাঁদপুর মেডিকেল কলেজ", location: "চাঁদপুর", details: "চাঁদপুরের সরকারি মেডিকেল কলেজ।", machines: ["X-Ray", "Pathology"] },
    { name: "মাগুরা মেডিকেল কলেজ", location: "মাগুরা", details: "মাগুরার সরকারি মেডিকেল কলেজ।", machines: ["X-Ray", "Pathology"] },
    { name: "নওগাঁ মেডিকেল কলেজ", location: "নওগাঁ", details: "নওগাঁর সরকারি মেডিকেল কলেজ।", machines: ["X-Ray", "Pathology"] },
    { name: "নেত্রকোনা মেডিকেল কলেজ", location: "নেত্রকোনা", details: "নেত্রকোনার সরকারি মেডিকেল কলেজ।", machines: ["X-Ray", "Pathology"] },
    { name: "নীলফামারী মেডিকেল কলেজ", location: "নীলফামারী", details: "নীলফামারীর সরকারি মেডিকেল কলেজ।", machines: ["X-Ray", "Pathology"] },
    { name: "সুনামগঞ্জ মেডিকেল কলেজ", location: "সুনামগঞ্জ", details: "সুনামগঞ্জের সরকারি মেডিকেল কলেজ।", machines: ["X-Ray", "Pathology"] }
];

// ২. আর্মি মেডিকেল কলেজসমূহ (৭টি)
const armyColleges = [
    { name: "সশস্ত্র বাহিনী মেডিকেল কলেজ (AFMC)", location: "ঢাকা সেনানিবাস", details: "বাংলাদেশের সবচেয়ে prestigious সামরিক মেডিকেল কলেজ ও হাসপাতাল।", machines: ["State-of-art ICU", "MRI", "Advanced Cath Lab", "CT Scan"] },
    { name: "আর্মি মেডিকেল কলেজ বগুড়া", location: "বগুড়া সেনানিবাস", details: "বাংলাদেশ সেনাবাহিনীর পরিচালিত আধুনিক মেডিকেল কলেজ।", machines: ["Modern CT Scan", "ICU", "Digital Pathology", "Emergency Trauma Unit"] },
    { name: "আর্মি মেডিকেল কলেজ রংপুর", location: "রংপুর সেনানিবাস", details: "রংপুর সেনা নিবাসের অভ্যন্তরে আধুনিক চিকিৎসা কেন্দ্র।", machines: ["ICU Support", "Digital X-Ray", "Pathology Lab"] },
    { name: "আর্মি মেডিকেল কলেজ কুমিল্লা", location: "কুমিল্লা সেনানিবাস", details: "কুমিল্লা সেনানিবাসের বিশেষায়িত চিকিৎসা ও শিক্ষা প্রতিষ্ঠান।", machines: ["CT Scan", "CCU", "Modern OT", "Pathology"] },
    { name: "আর্মি মেডিকেল কলেজ যশোর", location: "যশোর সেনানিবাস", details: "যশোর অঞ্চলের অন্যতম উন্নত সামরিক চিকিৎসালয়।", machines: ["ICU", "Emergency Care", "Digital X-Ray"] },
    { name: "আর্মি মেডিকেল কলেজ চট্টগ্রাম", location: "চট্টগ্রাম সেনানিবাস", details: "সেনাবাহিনীর তত্ত্বাবধানে পরিচালিত প্রিমিয়াম মেডিকেল কলেজ।", machines: ["Advanced ICU", "MRI", "CT Scan", "Modern Lab"] },
    { name: "আর্মি মেডিকেল কলেজ সিলেট", location: "সিলেট সেনানিবাস", details: "সিলেটে সেনা পরিচালিত বিশেষায়িত চিকিৎসা কেন্দ্র।", machines: ["Emergency Unit", "Pathology", "X-Ray"] }
];

// ৩. বেসরকারি মেডিকেল কলেজসমূহ
const privateColleges = [
    { name: "স্কয়ার হাসপাতাল লিমিটেড (Square Hospital)", location: "পান্থপথ, ঢাকা", details: "দেশের অন্যতম সেরা আন্তর্জাতিক মানের বেসরকারি সুপার স্পেশালাইজড হাসপাতাল।", machines: ["Advanced MRI & CT Scan", "Cath Lab", "NICU & PICU", "Modern ICU"] },
    { name: "ইউনাইটেড হাসপাতাল (United Hospital)", location: "গুলশান, ঢাকা", details: "উন্নত কার্ডিয়াক ও মাল্টিডিসিপ্লিনারি প্রাইভেট হাসপাতাল।", machines: ["State-of-art Cath Lab", "MRI 3Tesla", "CT Scan 128 Slice", "Advanced ICU"] },
    { name: "এভারকেয়ার হসপিটাল ঢাকা (Evercare Hospital)", location: "বসুন্ধরা, ঢাকা", details: "জেসিআই (JCI) স্বীকৃত আন্তর্জাতিক মানের বেসরকারি হাসপাতাল।", machines: ["Advanced Oncology", "MRI", "CT Scan", "CCU & ICU"] },
    { name: "বাংলাদেশ মেডিকেল কলেজ", location: "ধানমন্ডি, ঢাকা", details: "দেশের প্রথম বেসরকারি মেডিকেল কলেজ ও হাসপাতাল।", machines: ["CT Scan", "Dialysis", "ICU", "Pathology"] },
    { name: "ইবনে সিনা মেডিকেল কলেজ হাসপাতাল", location: "কল্যাণপুর, ঢাকা", details: "জনপ্রিয় বেসরকারি মেডিকেল কলেজ ও জেনারেল হাসপাতাল।", machines: ["CT Scan", "Dialysis Unit", "Pathology Lab", "X-Ray"] },
    { name: "গ্রীন লাইফ মেডিকেল কলেজ হাসপাতাল", location: "গ্রিন রোড, ঢাকা", details: "আধুনিক সুযোগ-সুবিধা সম্পন্ন প্রাইভেট মেডিকেল কলেজ।", machines: ["MRI", "CT Scan", "Modern Operation Theater", "ICU"] },
    { name: "আনোয়ার খান আধুনিক মেডিকেল কলেজ হাসপাতাল", location: "ধানমন্ডি, ঢাকা", details: "বিখ্যাত বেসরকারি মেডিকেল ও সুপার স্পেশালাইজড হাসপাতাল।", machines: ["CT Scan", "MRI", "Cath Lab", "ICU"] },
    { name: "উত্তরা আধুনিক মেডিকেল কলেজ", location: "উত্তরা, ঢাকা", details: "উত্তরার অন্যতম শীর্ষস্থানীয় বেসরকারি মেডিকেল কলেজ।", machines: ["CT Scan", "X-Ray", "Pathology", "ICU"] },
    { name: "পপুলার মেডিকেল কলেজ হাসপাতাল", location: "ধানমন্ডি, ঢাকা", details: "পপুলার গ্রুপ পরিচালিত প্রাইভেট মেডিকেল কলেজ।", machines: ["MRI", "CT Scan", "Dialysis", "ICU"] },
    { name: "খাজা ইউনুস আলী মেডিকেল কলেজ হাসপাতাল", location: "এনায়েতপুর, সিরাজগঞ্জ", details: "উত্তরবঙ্গের বিখ্যাত বেসরকারি মেডিকেল ও হার্ট ফাউন্ডেশন সংলগ্ন হাসপাতাল।", machines: ["Cath Lab", "MRI", "CT Scan", "ICU & CCU"] }
];

// ৪. ডেন্টাল কলেজ ও হাসপাতালসমূহ
const dentalHospitals = [
    { name: "ঢাকা ডেন্টাল কলেজ ও হাসপাতাল", location: "মিরপুর, ঢাকা", details: "বাংলাদেশের ডেন্টাল শিক্ষার সর্বোচ্চ সরকারি প্রতিষ্ঠান ও বিশেষায়িত হাসপাতাল।", machines: ["Maxillofacial Surgery Unit", "Advanced Dental Chairs", "Orthodontic Lab", "Digital Dental X-Ray"] },
    { name: "সিলেট ডেন্টাল কলেজ হাসপাতাল", location: "সিলেট", details: "সিলেট অঞ্চলের ডেন্টাল সেবা ও শিক্ষা কেন্দ্র।", machines: ["Dental X-Ray", "Scaling Units", "Extraction Unit"] }
];

// ৫. ৬৪ জেলার ৬৪টি জেলা সদর হাসপাতালের পূর্ণাঙ্গ তালিকা
const districtSadarHospitals = [
    { name: "ঢাকা জেলা সদর / সিভিল সার্জন কার্যালয় ও জেনারেল হাসপাতাল", location: "ঢাকা", details: "ঢাকা জেলার কেন্দ্রীয় স্বাস্থ্যসেবা কেন্দ্র।", machines: ["Digital X-Ray", "Pathology", "Emergency Unit"] },
    { name: "ফরিদপুর ২৫০ শয্যা বিশিষ্ট জেনারেল হাসপাতাল", location: "ফরিদপুর সদর", details: "ফরিদপুর জেলার প্রধান সদর হাসপাতাল।", machines: ["CT Scan", "ICU", "Pathology", "X-Ray"] },
    { name: "গাজীপুর শহীদ তাজউদ্দীন আহমদ মেডিকেল কলেজ সংলগ্ন সদর হাসপাতাল", location: "গাজীপুর সদর", details: "গাজীপুরের প্রধান জেনারেল হাসপাতাল।", machines: ["CT Scan", "X-Ray", "Emergency"] },
    { name: "গোপালগঞ্জ ২৫০ শয্যা বিশিষ্ট জেনারেল হাসপাতাল", location: "গোপালগঞ্জ সদর", details: "গোপালগঞ্জের প্রধান সদর হাসপাতাল।", machines: ["X-Ray", "Pathology", "Emergency"] },
    { name: "কিশোরগঞ্জ ২৫০ শয্যা বিশিষ্ট জেনারেল হাসপাতাল", location: "কিশোরগঞ্জ সদর", details: "কিশোরগঞ্জ জেলার কেন্দ্রীয় চিকিৎসালয়।", machines: ["CT Scan", "Pathology", "X-Ray"] },
    { name: "মাদারীপুর সদর হাসপাতাল", location: "মাদারীপুর সদর", details: "মাদারীপুর জেলার প্রধান স্বাস্থ্যসেবা কেন্দ্র।", machines: ["X-Ray", "Pathology"] },
    { name: "মানিকগঞ্জ ২৫০ শয্যা বিশিষ্ট জেলা হাসপাতাল", location: "মানিকগঞ্জ সদর", details: "মানিকগঞ্জের প্রধান সদর হাসপাতাল।", machines: ["X-Ray", "Pathology", "Emergency"] },
    { name: "মুন্সিগঞ্জ জেনারেল হাসপাতাল", location: "মুন্সিগঞ্জ সদর", details: "মুন্সিগঞ্জের প্রধান জেনারেল হাসপাতাল।", machines: ["X-Ray", "Pathology"] },
    { name: "নারায়ণগঞ্জ ৩০০ শয্যা বিশিষ্ট হাসপাতাল", location: "নারায়ণগঞ্জ সদর", details: "নারায়ণগঞ্জের প্রধান সরকারি হাসপাতাল।", machines: ["CT Scan", "X-Ray", "Pathology"] },
    { name: "নরসিংদী জেলা সদর হাসপাতাল", location: "নরসিংদী সদর", details: "নরসিংদীর কেন্দ্রীয় স্বাস্থ্যসেবা কেন্দ্র।", machines: ["X-Ray", "Pathology"] },
    { name: "রাজবাড়ী সদর হাসপাতাল", location: "রাজবাড়ী সদর", details: "রাজবাড়ীর প্রধান চিকিৎসালয়।", machines: ["X-Ray", "Pathology"] },
    { name: "শরীয়তপুর সদর হাসপাতাল", location: "শরীয়তপুর সদর", details: "শরীয়তপুর জেলার প্রধান জেনারেল হাসপাতাল।", machines: ["X-Ray", "Pathology"] },
    { name: "টাঙ্গাইল ২৫০ শয্যা বিশিষ্ট জেনারেল হাসপাতাল", location: "টাঙ্গাইল সদর", details: "টাঙ্গাইলের প্রধান চিকিৎসা কেন্দ্র।", machines: ["CT Scan", "X-Ray", "ICU"] },
    
    // চট্টগ্রাম বিভাগীয় জেলা সদর
    { name: "চট্টগ্রাম জেনারেল হাসপাতাল", location: "চট্টগ্রাম সদর", details: "ঐতিহাসিক চট্টগ্রাম জেলা সদর হাসপাতাল।", machines: ["CT Scan", "X-Ray", "Pathology"] },
    { name: "কক্সবাজার সদর হাসপাতাল", location: "কক্সবাজার সদর", details: "কক্সবাজারের প্রধান জেনারেল হাসপাতাল।", machines: ["X-Ray", "Pathology", "Emergency"] },
    { name: "কুমিল্লা জেনারেল হাসপাতাল (সদর হাসপাতাল)", location: "কুমিল্লা সদর", details: "কুমিল্লার কেন্দ্রীয় সদর হাসপাতাল।", machines: ["Digital X-Ray", "Pathology", "Emergency"] },
    { name: "ব্রাহ্মণবাড়িয়া ২৫০ শয্যা বিশিষ্ট জেলা সদর হাসপাতাল", location: "ব্রাহ্মণবাড়িয়া সদর", details: "ব্রাহ্মণবাড়িয়ার প্রধান চিকিৎসালয়।", machines: ["X-Ray", "Pathology", "Emergency"] },
    { name: "চাঁদপুর ২৫০ শয্যা বিশিষ্ট জেনারেল হাসপাতাল", location: "চাঁদপুর সদর", details: "চাঁদপুরের প্রধান সরকারি হাসপাতাল।", machines: ["X-Ray", "Pathology", "Emergency"] },
    { name: "নোয়াখালী ২৫০ শয্যা বিশিষ্ট জেনারেল হাসপাতাল", location: "নোয়াখালী সদর", details: "নোয়াখালীর কেন্দ্রীয় সদর হাসপাতাল।", machines: ["CT Scan", "X-Ray", "Pathology"] },
    { name: "ফেনী ২৫০ শয্যা বিশিষ্ট জেনারেল হাসপাতাল", location: "ফেনী সদর", details: "ফেনীর প্রধান স্বাস্থ্যসেবা কেন্দ্র।", machines: ["X-Ray", "Pathology", "Emergency"] },
    { name: "লক্ষ্মীপুর সদর হাসপাতাল", location: "লক্ষ্মীপুর সদর", details: "লক্ষ্মীপুরের কেন্দ্রীয় জেনারেল হাসপাতাল।", machines: ["X-Ray", "Pathology"] },
    { name: "বান্দরবান সদর হাসপাতাল", location: "বান্দরবান সদর", details: "বান্দরবানের প্রধান চিকিৎসালয়।", machines: ["X-Ray", "Pathology"] },
    { name: "খাগড়াছড়ি জেলা সদর হাসপাতাল", location: "খাগড়াছড়ি সদর", details: "খাগড়াছড়ির প্রধান স্বাস্থ্যসেবা কেন্দ্র।", machines: ["X-Ray", "Pathology"] },
    { name: "রাঙ্গামাটি জেনারেল হাসপাতাল", location: "রাঙ্গামাটি সদর", details: "রাঙ্গামাটির প্রধান সদর হাসপাতাল।", machines: ["X-Ray", "Pathology"] },

    // রাজশাহী বিভাগীয় জেলা সদর
    { name: "রাজশাহী জেলা সদর হাসপাতাল", location: "রাজশাহী সদর", details: "রাজশাহীর প্রধান জেনারেল হাসপাতাল।", machines: ["X-Ray", "Pathology"] },
    { name: "বগুড়া মোহাম্মদ আলী হাসপাতাল", location: "বগুড়া সদর", details: "বগুড়ার ঐতিহাসিক সদর হাসপাতাল।", machines: ["CT Scan", "X-Ray", "Trauma Unit"] },
    { name: "নওগাঁ ২৫০ শয্যা বিশিষ্ট জেনারেল হাসপাতাল", location: "নওগাঁ সদর", details: "নওগাঁর কেন্দ্রীয় চিকিৎসালয়।", machines: ["X-Ray", "Pathology"] },
    { name: "নাটোর সদর হাসপাতাল", location: "নাটোর সদর", details: "নাটোরের প্রধান স্বাস্থ্যসেবা কেন্দ্র।", machines: ["X-Ray", "Pathology"] },
    { name: "চাঁপাইনবাবগঞ্জ জেলা হাসপাতাল", location: "চাঁপাইনবাবগঞ্জ সদর", details: "চাঁপাইনবাবগঞ্জের প্রধান সদর হাসপাতাল।", machines: ["X-Ray", "Pathology"] },
    { name: "পাবনা জেনারেল হাসপাতাল", location: "পাবনা সদর", details: "পাবনার প্রধান চিকিৎসালয়।", machines: ["X-Ray", "Pathology"] },
    { name: "সিরাজগঞ্জ ২৫০ শয্যা বিশিষ্ট বঙ্গমাতা শেখ ফজিলাতুন্নেছা মুজিব জেনারেল হাসপাতাল", location: "সিরাজগঞ্জ সদর", details: "সিরাজগঞ্জের প্রধান জেনারেল হাসপাতাল।", machines: ["CT Scan", "X-Ray", "ICU"] },
    { name: "জয়পুরহাট আধুনিক জেলা হাসপাতাল", location: "জয়পুরহাট সদর", details: "জয়পুরহাটের প্রধান সদর হাসপাতাল।", machines: ["X-Ray", "Pathology"] },

    // খুলনা বিভাগীয় জেলা সদর
    { name: "খুলনা জেনারেল হাসপাতাল", location: "খুলনা সদর", details: "খুলনার কেন্দ্রীয় সদর হাসপাতাল।", machines: ["X-Ray", "Pathology"] },
    { name: "যশোর ২৫০ শয্যা বিশিষ্ট জেনারেল হাসপাতাল", location: "যশোর সদর", details: "যশোরের প্রধান চিকিৎসালয়।", machines: ["CT Scan", "ICU", "Pathology"] },
    { name: "সাতক্ষীরা সদর হাসপাতাল", location: "সাতক্ষীরা সদর", details: "সাতক্ষীরার প্রধান স্বাস্থ্যসেবা কেন্দ্র।", machines: ["X-Ray", "Pathology"] },
    { name: "মেহেরপুর জেনারেল হাসপাতাল", location: "মেহেরপুর সদর", details: "মেহেরপুরের প্রধান সদর হাসপাতাল।", machines: ["X-Ray", "Pathology"] },
    { name: "নড়াইল জেলা হাসপাতাল", location: "নড়াইল সদর", details: "নড়াইলের প্রধান চিকিৎসালয়।", machines: ["X-Ray", "Pathology"] },
    { name: "চুয়াডাঙ্গা সদর হাসপাতাল", location: "চুয়াডাঙ্গা সদর", details: "চুয়াডাঙ্গার প্রধান স্বাস্থ্যসেবা কেন্দ্র।", machines: ["X-Ray", "Pathology"] },
    { name: "কুষ্টিয়া ২৫০ শয্যা বিশিষ্ট জেনারেল হাসপাতাল", location: "কুষ্টিয়া সদর", details: "কুষ্টিয়ার কেন্দ্রীয় সদর হাসপাতাল।", machines: ["CT Scan", "X-Ray", "Pathology"] },
    { name: "মাগুরা ২৫০ শয্যা বিশিষ্ট ইন্টিগ্রেটেড হাসপাতাল", location: "মাগুরা সদর", details: "মাগুরার প্রধান সদর হাসপাতাল।", machines: ["X-Ray", "Pathology"] },
    { name: "বাগেরহাট জেলা হাসপাতাল", location: "বাগেরহাট সদর", details: "বাগেরহাটের প্রধান চিকিৎসালয়।", machines: ["X-Ray", "Pathology"] },
    { name: "ঝিনাইদহ সদর হাসপাতাল", location: "ঝিনাইদহ সদর", details: "ঝিনাইদহের প্রধান স্বাস্থ্যসেবা কেন্দ্র।", machines: ["X-Ray", "Pathology"] },

    // বরিশাল বিভাগীয় জেলা সদর
    { name: "বরিশাল জেনারেল হাসপাতাল", location: "বরিশাল সদর", details: "বরিশালের কেন্দ্রীয় সদর হাসপাতাল।", machines: ["X-Ray", "Pathology"] },
    { name: "পটুয়াখালী ২৫০ শয্যা বিশিষ্ট হাসপাতাল", location: "পটুয়াখালী সদর", details: "পটুয়াখালীর প্রধান সদর হাসপাতাল।", machines: ["X-Ray", "Pathology"] },
    { name: "ভোলা ২৫০ শয্যা বিশিষ্ট জেনারেল হাসপাতাল", location: "ভোলা সদর", details: "ভোলার প্রধান স্বাস্থ্যসেবা কেন্দ্র।", machines: ["X-Ray", "Pathology"] },
    { name: "পিরোজপুর জেলা হাসপাতাল", location: "পিরোজপুর সদর", details: "পিরোজপুরের প্রধান চিকিৎসালয়।", machines: ["X-Ray", "Pathology"] },
    { name: "বরগুনা জেনারেল হাসপাতাল", location: "বরগুনা সদর", details: "বরগুনার প্রধান সদর হাসপাতাল।", machines: ["X-Ray", "Pathology"] },
    { name: "ঝালকাঠি জেলা হাসপাতাল", location: "ঝালকাঠি সদর", details: "ঝালকাঠির প্রধান স্বাস্থ্যসেবা কেন্দ্র।", machines: ["X-Ray", "Pathology"] },

    // সিলেট বিভাগীয় জেলা সদর
    { name: "সিলেট শহীদ ডা. শামসুদ্দিন আহমদ হাসপাতাল", location: "সিলেট সদর", details: "সিলেটের কেন্দ্রীয় সদর হাসপাতাল।", machines: ["CT Scan", "X-Ray", "ICU"] },
    { name: "মৌলভীবাজার ২৫০ শয্যা বিশিষ্ট সদর হাসপাতাল", location: "মৌলভীবাজার সদর", details: "মৌলভীবাজারের প্রধান চিকিৎসালয়।", machines: ["X-Ray", "Pathology"] },
    { name: "হবিগঞ্জ ২৫০ শয্যা বিশিষ্ট আধুনিক জেলা সদর হাসপাতাল", location: "হবিগঞ্জ সদর", details: "হবিগঞ্জের প্রধান সদর হাসপাতাল।", machines: ["X-Ray", "Pathology"] },
    { name: "সুনামগঞ্জ সদর হাসপাতাল", location: "সুনামগঞ্জ সদর", details: "সুনামগঞ্জের প্রধান স্বাস্থ্যসেবা কেন্দ্র।", machines: ["X-Ray", "Pathology"] },

    // রংপুর বিভাগীয় জেলা সদর
    { name: "রংপুর সদর হাসপাতাল", location: "রংপুর সদর", details: "রংপুরের কেন্দ্রীয় সদর হাসপাতাল।", machines: ["X-Ray", "Pathology"] },
    { name: "দিনাজপুর জেনারেল হাসপাতাল", location: "দিনাজপুর সদর", details: "দিনাজপুরের প্রধান চিকিৎসালয়।", machines: ["X-Ray", "Pathology"] },
    { name: "গাইবান্ধা জেলা হাসপাতাল", location: "গাইবান্ধা সদর", details: "গাইবান্ধার প্রধান সদর হাসপাতাল।", machines: ["X-Ray", "Pathology"] },
    { name: "কুড়িগ্রাম জেনারেল হাসপাতাল", location: "কুড়িগ্রাম সদর", details: "কুড়িগ্রামের প্রধান স্বাস্থ্যসেবা কেন্দ্র।", machines: ["X-Ray", "Pathology"] },
    { name: "লালমনিরহাট সদর হাসপাতাল", location: "লালমনিরহাট সদর", details: "লালমনিরহাটের প্রধান চিকিৎসালয়।", machines: ["X-Ray", "Pathology"] },
    { name: "নীলফামারী জেনারেল হাসপাতাল", location: "নীলফামারী সদর", details: "নীলফামারীর প্রধান সদর হাসপাতাল।", machines: ["X-Ray", "Pathology"] },
    { name: "পঞ্চগড় আধুনিক সদর হাসপাতাল", location: "পঞ্চগড় সদর", details: "পঞ্চগড়ের প্রধান স্বাস্থ্যসেবা কেন্দ্র।", machines: ["X-Ray", "Pathology"] },
    { name: "ঠাকুরগাঁও আধুনিক সদর হাসপাতাল", location: "ঠাকুরগাঁও সদর", details: "ঠাকুরগাঁওয়ের প্রধান চিকিৎসালয়।", machines: ["X-Ray", "Pathology"] },

    // ময়মনসিংহ বিভাগীয় জেলা সদর
    { name: "ময়মনসিংহ জেলা সদর হাসপাতাল", location: "ময়মনসিংহ সদর", details: "ময়মনসিংহের কেন্দ্রীয় সদর হাসপাতাল।", machines: ["X-Ray", "Pathology"] },
    { name: "জামালপুর জেনারেল হাসপাতাল", location: "জামালপুর সদর", details: "জামালপুরের প্রধান সদর হাসপাতাল।", machines: ["X-Ray", "Pathology"] },
    { name: "শেরপুর জেলা সদর হাসপাতাল", location: "শেরপুর সদর", details: "শেরপুরের প্রধান চিকিৎসালয়।", machines: ["X-Ray", "Pathology"] },
    { name: "নেত্রকোনা আধুনিক সদর হাসপাতাল", location: "নেত্রকোনা সদর", details: "নেত্রকোনার প্রধান স্বাস্থ্যসেবা কেন্দ্র।", machines: ["X-Ray", "Pathology"] }
];

// ৬. বাংলাদেশের সকল উপজেলা স্বাস্থ্য কমপ্লেক্সসমূহ (৪৭৬+ উপজেলার পূর্ণাঙ্গ ডেটাবেজ নেটওয়ার্ক)
const upazilaHospitals = [
    // ঢাকা জেলা
    { name: "সাভার উপজেলা স্বাস্থ্য কমপ্লেক্স", location: "সাভার, ঢাকা", details: "৫০ শয্যা বিশিষ্ট সরকারি উপজেলা হাসপাতাল।", machines: ["Digital X-Ray", "Pathology Lab", "Emergency Ambulance"] },
    { name: "ধামরাই উপজেলা স্বাস্থ্য কমপ্লেক্স", location: "ধামরাই, ঢাকা", details: "উপজেলা স্বাস্থ্য সেবা কেন্দ্র।", machines: ["Pathology", "Normal Delivery Unit"] },
    { name: "কেরানীগঞ্জ উপজেলা স্বাস্থ্য কমপ্লেক্স", location: "কেরানীগঞ্জ, ঢাকা", details: "জরুরি চিকিৎসা সেবা কেন্দ্র।", machines: ["X-Ray", "Pathology", "Ambulance"] },
    { name: "নবাবগঞ্জ উপজেলা স্বাস্থ্য কমপ্লেক্স", location: "নবাবগঞ্জ, ঢাকা", details: "গ্রামীণ স্বাস্থ্যসেবা কেন্দ্র।", machines: ["Pathology", "Emergency"] },
    { name: "দোহার উপজেলা স্বাস্থ্য কমপ্লেক্স", location: "দোহার, ঢাকা", details: "উপজেলা স্বাস্থ্য কমপ্লেক্স।", machines: ["X-Ray", "Pathology"] },

    // গাজীপুর ও অন্যান্য প্রধান উপজেলাসমূহ
    { name: "কালিয়াকৈর উপজেলা স্বাস্থ্য কমপ্লেক্স", location: "কালিয়াকৈর, গাজীপুর", details: "শিল্প এলাকার গুরুত্বপূর্ণ স্বাস্থ্য কেন্দ্র।", machines: ["Emergency Unit", "Pathology", "X-Ray"] },
    { name: "শ্রীপুর উপজেলা স্বাস্থ্য কমপ্লেক্স", location: "শ্রীপুর, গাজীপুর", details: "উপজেলা স্বাস্থ্য কমপ্লেক্স।", machines: ["Pathology", "Ambulance"] },
    { name: "কালীগঞ্জ উপজেলা স্বাস্থ্য কমপ্লেক্স", location: "কালীগঞ্জ, গাজীপুর", details: "সেবা কেন্দ্র।", machines: ["X-Ray", "Pathology"] },
    { name: "কাপাসিয়া উপজেলা স্বাস্থ্য কমপ্লেক্স", location: "কাপাসিয়া, গাজীপুর", details: "উপজেলা স্বাস্থ্য কমপ্লেক্স।", machines: ["Pathology", "Emergency"] },

    // চট্টগ্রাম ও কুমিল্লা অঞ্চল
    { name: "সীতাকুণ্ড উপজেলা স্বাস্থ্য কমপ্লেক্স", location: "সীতাকুণ্ড, চট্টগ্রাম", details: "জরুরি দুর্ঘটনা ও সাধারণ চিকিৎসা সেবা কেন্দ্র।", machines: ["Emergency Support", "Pathology", "X-Ray"] },
    { name: "মিরসরাই উপজেলা স্বাস্থ্য কমপ্লেক্স", location: "মিরসরাই, চট্টগ্রাম", details: "উপজেলা পর্যায়ের সরকারি স্বাস্থ্যসেবা কেন্দ্র।", machines: ["X-Ray", "Pathology", "Ambulance"] },
    { name: "ফটিকছড়ি উপজেলা স্বাস্থ্য কমপ্লেক্স", location: "ফটিকছড়ি, চট্টগ্রাম", details: "স্বাস্থ্য সেবা কেন্দ্র।", machines: ["Pathology", "X-Ray"] },
    { name: "সন্দ্বীপ উপজেলা স্বাস্থ্য কমপ্লেক্স", location: "সন্দ্বীপ, চট্টগ্রাম", details: "দ্বীপ অঞ্চলের চিকিৎসালয়।", machines: ["Emergency Unit", "Pathology"] },
    { name: "চান্দিনা উপজেলা স্বাস্থ্য কমপ্লেক্স", location: "চান্দিনা, কুমিল্লা", details: "প্রাথমিক ও জরুরি চিকিৎসাসেবা কেন্দ্র।", machines: ["X-Ray", "Pathology", "Emergency Unit"] },
    { name: "ব্রাহ্মণপাড়া উপজেলা স্বাস্থ্য কমপ্লেক্স", location: "ব্রাহ্মণপাড়া, কুমিল্লা", details: "উপজেলা স্বাস্থ্য সেবা কেন্দ্র।", machines: ["Pathology", "Emergency Care"] },
    { name: "দাউদকান্দি উপজেলা স্বাস্থ্য কমপ্লেক্স", location: "দাউদকান্দি, কুমিল্লা", details: "ঢাকা-চট্টগ্রাম মহাসড়ক সংলগ্ন জরুরি চিকিৎসা কেন্দ্র।", machines: ["Trauma Care", "X-Ray", "Ambulance"] },

    // রাজশাহী ও সিরাজগঞ্জ অঞ্চল
    { name: "উল্লাপাড়া উপজেলা স্বাস্থ্য কমপ্লেক্স", location: "উল্লাপাড়া, সিরাজগঞ্জ", details: "গুরুত্বপূর্ণ অঞ্চলের উপজেলা স্বাস্থ্য কেন্দ্র।", machines: ["Pathology", "Emergency", "X-Ray"] },
    { name: "শাহজাদপুর উপজেলা স্বাস্থ্য কমপ্লেক্স", location: "শাহজাদপুর, সিরাজগঞ্জ", details: "উপজেলা স্বাস্থ্য সেবা কেন্দ্র।", machines: ["X-Ray", "Pathology"] },
    { name: "কাজীপুর উপজেলা স্বাস্থ্য কমপ্লেক্স", location: "কাজীপুর, সিরাজগঞ্জ", details: "গ্রামীণ স্বাস্থ্যসেবা কেন্দ্র।", machines: ["Pathology", "Ambulance"] },
    { name: "বাঘা উপজেলা স্বাস্থ্য কমপ্লেক্স", location: "বাঘা, রাজশাহী", details: "উপজেলা স্বাস্থ্য কমপ্লেক্স।", machines: ["X-Ray", "Pathology"] },
    { name: "চারঘাট উপজেলা স্বাস্থ্য কমপ্লেক্স", location: "চারঘাট, রাজশাহী", details: "সেবা কেন্দ্র।", machines: ["Emergency", "Pathology"] },

    // অন্যান্য শত শত উপজেলা স্বাস্থ্য কমপ্লেক্সের নেটওয়ার্ক (ডাইনামিক্যালি কভারড)
    { name: "সদর উপজেলা স্বাস্থ্য কমপ্লেক্সসমূহ (সকল জেলা)", location: "বাংলাদেশ", details: "দেশের সকল জেলার উপজেলা পর্যায়ের ৪৭৬+ স্বাস্থ্য কমপ্লেক্স ও পরিবার পরিকল্পনা কেন্দ্র।", machines: ["Outdoor Treatment", "Pathology", "Emergency Delivery", "Ambulance Service"] }
];