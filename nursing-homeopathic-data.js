// ১. সরকারি বিএসসি ও ডিপ্লোমা নার্সিং এবং মিডওয়াইফারি কলেজসমূহ
const govtNursingColleges = [
    { name: "কলেজ অব নার্সিং, মহাখালী", location: "ঢাকা", details: "বাংলাদেশের নার্সিং শিক্ষার সর্বোচ্চ ও প্রথম সরকারি প্রতিষ্ঠান। বিএসসি ও পোস্ট বেসিক নার্সিং কোর্স পরিচালিত হয়।", machines: ["Training Labs", "Smart Classrooms", "Library", "Hostel"] },
    { name: "ঢাকা নার্সিং কলেজ", location: "ঢাকা মেডিকেল কলেজ সংলগ্ন, ঢাকা", details: "ঢাকা অঞ্চলের অন্যতম প্রধান সরকারি নার্সিং ও মিডওয়াইফারি ইনস্টিটিউট।", machines: ["Skills Lab", "Demonstration Room", "Computer Lab"] },
    { name: "চট্টগ্রাম নার্সিং কলেজ", location: "চট্টগ্রাম", details: "চট্টগ্রাম বিভাগের প্রধান সরকারি নার্সিং শিক্ষা ও প্রশিক্ষণ কেন্দ্র।", machines: ["Nursing Skills Lab", "Library", "Hostel Facility"] },
    { name: "রাজশাহী নার্সিং কলেজ", location: "রাজশাহী", details: "উত্তরবঙ্গের স্বনামধন্য সরকারি নার্সিং কলেজ।", machines: ["Practical Labs", "Library", "Hostel"] },
    { name: "সিলেট নার্সিং কলেজ", location: "সিলেট", details: "সিলেট অঞ্চলের সরকারি নার্সিং ও মিডওয়াইফারি ইনস্টিটিউট।", machines: ["Skills Lab", "Training Center"] },
    { name: "বরিশাল নার্সিং কলেজ", location: "বরিশাল", details: "দক্ষিণ অঞ্চলের সরকারি নার্সিং শিক্ষা প্রতিষ্ঠান।", machines: ["Practical Lab", "Library"] },
    { name: "রংপুর নার্সিং কলেজ", location: "রংপুর", details: "রংপুর বিভাগের প্রধান সরকারি নার্সিং কলেজ।", machines: ["Skills Lab", "Computer Lab"] },
    { name: "ময়মনসিংহ নার্সিং কলেজ", location: "ময়মনসিংহ", details: "ময়মনসিংহের সরকারি নার্সিং শিক্ষা কেন্দ্র।", machines: ["Nursing Lab", "Library"] },
    { name: "শহীদ তাজউদ্দীন আহমদ নার্সিং কলেজ", location: "গাজীপুর", details: "গাজীপুরের সরকারি নার্সিং ও মিডওয়াইফারি কলেজ।", machines: ["Modern Labs", "Training Unit"] }
];

// ২. বেসরকারি নার্সিং কলেজসমূহ (প্রধান কয়েকটি)
const privateNursingColleges = [
    { name: "স্কয়ার কলেজ অব নার্সিং", location: "ঢাকা", details: "স্কয়ার গ্রুপ পরিচালিত আন্তর্জাতিক মানের বেসরকারি নার্সিং ইনস্টিটিউট।", machines: ["Advanced Training Lab", "Simulation Center", "Hospital Attachment"] },
    { name: "বেমেক নার্সিং কলেজ", location: "ঢাকা", details: "বেসরকারি ব্যবস্থাপনায় পরিচালিত মানসম্মত নার্সিং শিক্ষা কেন্দ্র।", machines: ["Practical Lab", "Library"] },
    { name: "ইবনে সিনা নার্সিং ইনস্টিটিউট", location: "ঢাকা", details: "ইবনে সিনা ট্রাস্ট পরিচালিত নার্সিং ও মিডওয়াইফারি কোর্স।", machines: ["Skills Lab", "Hospital Training"] },
    { name: "ইউনিভার্সেল নার্সিং কলেজ", location: "ঢাকা", details: "আধুনিক সুযোগ-সুবিধা সম্পন্ন প্রাইভেট নার্সিং কলেজ।", machines: ["Modern Labs", "Digital Library"] }
];

// ৩. হোমিওপ্যাথিক, ইউনানি ও আয়ুর্বেদিক মেডিকেল কলেজ ও বিশ্ববিদ্যালয়
const alternativeMedicalColleges = [
    { name: "সরকারি ইউনানি ও আয়ুর্বেদিক মেডিকেল কলেজ ও হাসপাতাল", location: "মিরপুর-১৩, ঢাকা", details: "বাংলাদেশের একমাত্র সরকারি ইউনানি ও আয়ুর্বেদিক উচ্চশিক্ষা ও চিকিৎসা কেন্দ্র (ঢাকা বিশ্ববিদ্যালয় অধিভুক্ত)।", machines: ["Herbal Garden", "Adviyah Museum", "Traditional Pharmacy", "Outdoor & Indoor Treatment"] },
    { name: "বাংলাদেশ হোমিওপ্যাথিক মেডিকেল কলেজ ও হাসপাতাল", location: "টিনবি সার্কুলার রোড, ঢাকা", details: "দেশের অন্যতম প্রধান ঐতিহ্যবাহী হোমিওপ্যাথিক শিক্ষা ও চিকিৎসা প্রতিষ্ঠান।", machines: ["Homeopathic Dispensary", "Pathology Lab", "Research Library"] },
    { name: "বসুন্ধরা হোমিওপ্যাথিক মেডিকেল কলেজ ও হাসপাতাল", location: "ঢাকা", details: "বেসরকারি পর্যায়ে হোমিওপ্যাথিক চিকিৎসা ও ডিগ্রি প্রদানকারী প্রতিষ্ঠান।", machines: ["Repertory Lab", "Clinic Facility"] },
    { name: "হানিফ হোমিওপ্যাথিক মেডিকেল কলেজ ও হাসপাতাল", location: "চট্টগ্রাম", details: "চট্টগ্রাম অঞ্চলের হোমিওপ্যাথিক শিক্ষা কেন্দ্র।", machines: ["Medical Library", "Outpatient Department"] },
    { name: "হামদর্দ ল্যাবরেটরিজ ও ইউনানি মেডিকেল গবেষণা কেন্দ্র", location: "ঢাকা", details: "প্রাকৃতিক ও ইউনানি ওষুধ প্রস্তুতকারক এবং গবেষণা প্রতিষ্ঠান।", machines: ["Herbal Lab", "Research Center", "Quality Control Unit"] }
];