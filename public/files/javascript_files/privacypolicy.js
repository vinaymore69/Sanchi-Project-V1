document.querySelectorAll('a[href^="."]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            let offset = 80; // Default offset for desktop

            if (window.innerWidth <= 1024) { // Tablet and mobile view
                offset = 125; // Increase offset for smaller screens
            }

            const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });
        }
    });
});



const content = {
    english: {
      content1: "This Data Collection and Processing Policy, or Privacy Policy (hereafter referred to as the “Policy”) explains how SanChi collects, uses, stores, and discloses information about You when You visit our Website.",
      content2: "You hereby consent to the Processing of Your Personal Data and confirm that You have been informed of the procedure, purpose, and other terms of processing in accordance with applicable regulations including the EU GDPR, the California CCPA, and other relevant laws.",
      content3: "By providing any information about Yourself via the relevant forms on the Website, You agree to this Policy and grant SanChi permission to collect, use, and disclose your information for the purposes outlined below.",
      content4: "Additionally, if you are a resident of India, your personal data is processed in compliance with applicable Indian data protection regulations, including the Information Technology Act, 2000 and the IT (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011. These laws provide you with the right to access, correct, and request the deletion of your personal data where permitted. For any inquiries or data-related requests, please contact us at SanChi.educate@gmail.com.",
      content5: "By continuing to use our Website, You acknowledge that You have the legal ability to consent to this Policy and to the Processing of Your Personal Data under these conditions in accordance with the laws of your jurisdiction.",
      content6: "We reserve the right to make changes to this Policy at any time. Any modifications will be indicated by updating the date at the top of this text. We encourage You to review the Policy periodically to stay informed about how We protect Your privacy.",
      content7: "User's Rights",
      content8: "At SanChi, your privacy is a priority. If you are a resident of India, you have the following rights:",
      content9: "The right to access personal data held about you.",
      content10: "The right to request corrections to your personal information.",
      content11: "The right to withdraw consent for data processing.",
      content12: "Data We Collect",
      content13: "By using our Website, you acknowledge that you have the legal ability to consent to this Policy and to the processing of your personal data as described below.",
      content14: "01",
      content15: "Personal Data that You Provide to Us",
      content16: "When you register or interact with our services, you provide us with personal information including:",
      content17: "Email Address (used for account verification, communication, and updates).",
      content18: "Username (displayed on your profile and associated with uploaded content).",
      content19: "Any additional details you provide through your user dashboard.",
      content20: "By providing this information, you consent to SanChi collecting, using, and disclosing it as described in this Policy.",
      content21: "02",
      content22: "Automatically-collected Information",
      content23: "When you use our Website, SanChi automatically collects certain information to enhance your experience and ensure the security of the platform:",
      content24: "Device Information (IP Address, browser type, operating system).",
      content25: "Log Data (timestamps, pages visited, and interaction data).",
      content26: "03",
      content27: "Cookies",
      content28: "We use cookies to improve your experience, analyze website traffic, and enhance functionality. You can manage your cookie preferences through your browser settings.",
      content29: "By using our Website, you consent to our use of cookies as described in this Policy.",
      content30: "04",
      content31: "Legal Grounds and Goals",
      content32: "SanChi processes your personal data on the following legal grounds:",
      content33: "Consent: When you explicitly provide us with permission to use your data.",
      content34: "Legitimate Interest: To ensure the security and functionality of the website.",
      content35: "Compliance with Legal Obligations: To meet applicable regulatory requirements.",
      content36: "By using our Website, you agree to the collection and processing of your data as described.",
      content37: "Purpose of Data Processing",
      content38: "Your personal data is processed for the following purposes:",
      content39: "User Authentication and Account Management: Access to the user dashboard and admin functionalities.",
      content40: "Video Upload and Streaming: Managing video uploads and enabling streaming of pre-recorded videos on our platform.",
      content41: "Sticky Note Feature: Allowing users to create and manage personal sticky notes within their dashboard.",
      content42: "Audio Book Feature: Providing access to a range of audiobooks available on our platform.",
      content43: "Communication and Support: Sending important updates, security alerts, and customer support information.",
      content44: "Terms of Data Storage",
      content45: "We store your data for as long as necessary to fulfill the purposes outlined in this Policy, including:",
      content46: "Providing our services (user dashboard, video streaming, sticky notes, and audiobooks).",
      content47: "Resolving disputes and preventing fraud.",
      content48: "User's Rights",
      content49: "Data We Collect",
      content50: "Personal Provided Data",
      content51: "Automatically-collected Data",
      content52: "Cookies",
      content53: "Legal Grounds and Goals",
      content54: "Purpose of Data Processing",
      content55: "Terms of Data Storage",
      content56: "Privacy Policy",
      content58: `Last updated: February 02,2025 <br/> Published on: January 12,2025`,
       // menu english

    content107: `Home`,
    content108: `About`,
    content109: `Language`,
    content110: `Contact`,
    content111: `Resources`,
    content112: `Dashboard`,
  

    // menu end


    // Footer
    content201: `© 2025 Vidyalankar Polytechnic. All Rights Reserved.`,
    content202: `Privacy Policy`,
    content203: `Gallery`,
    content204: `Volunteering is at the very core of being a human. No one has made it through life without someone else's help. — Heather French Henry`,
    content205: `Innovators`,
    content206: `Sponcers`,


    // Footer end

    },
    hindi: {
      content1: "यह डेटा संग्रहण और प्रसंस्करण नीति, या गोपनीयता नीति (जिसे आगे 'नीति' कहा गया है) यह बताती है कि SanChi आपके बारे में जानकारी कैसे एकत्रित, उपयोग, संग्रहित और प्रकट करता है जब आप हमारी वेबसाइट का दौरा करते हैं।",
      content2: "आप यहाँ अपने व्यक्तिगत डेटा की प्रक्रिया के लिए सहमति देते हैं और पुष्टि करते हैं कि आपको प्रक्रिया, उद्देश्य और अन्य शर्तों की जानकारी दी गई है, जो लागू नियमों के अनुसार है, जिनमें EU GDPR, कैलिफ़ोर्निया CCPA और अन्य प्रासंगिक कानून शामिल हैं।",
      content3: "वेबसाइट पर संबंधित फॉर्म के माध्यम से अपने बारे में कोई भी जानकारी प्रदान करके, आप इस नीति से सहमत होते हैं और SanChi को आपकी जानकारी को नीचे वर्णित उद्देश्यों के लिए एकत्र, उपयोग और प्रकट करने की अनुमति प्रदान करते हैं।",
      content4: "इसके अतिरिक्त, यदि आप भारत के निवासी हैं, तो आपके व्यक्तिगत डेटा को लागू भारतीय डेटा सुरक्षा विनियमों के अनुरूप संसाधित किया जाता है, जिसमें सूचना प्रौद्योगिकी अधिनियम, 2000 और IT (उचित सुरक्षा प्रथाओं और प्रक्रियाओं और संवेदनशील व्यक्तिगत डेटा या सूचना) नियम, 2011 शामिल हैं। ये कानून आपको आपके व्यक्तिगत डेटा तक पहुंचने, उसे सुधारने, और जहां अनुमति हो, उसे हटाने का अनुरोध करने का अधिकार प्रदान करते हैं। किसी भी पूछताछ या डेटा-संबंधी अनुरोध के लिए, कृपया हमसे SanChi.educate@gmail.com पर संपर्क करें।",
      content5: "हमारी वेबसाइट का उपयोग जारी रखने से, आप यह स्वीकार करते हैं कि आपके पास इस नीति और आपके व्यक्तिगत डेटा की प्रक्रिया के लिए कानूनी सहमति देने की क्षमता है, आपके क्षेत्राधिकार के कानूनों के अनुसार।",
      content6: "हम इस नीति में किसी भी समय परिवर्तन करने का अधिकार सुरक्षित रखते हैं। किसी भी संशोधन को इस पाठ के शीर्ष पर तिथि अपडेट करके सूचित किया जाएगा। हम आपको नियमित रूप से नीति की समीक्षा करने के लिए प्रोत्साहित करते हैं ताकि आप यह जान सकें कि हम आपकी गोपनीयता की सुरक्षा कैसे करते हैं।",
      content7: "उपयोगकर्ता के अधिकार",
      content8: "SanChi में, आपकी गोपनीयता हमारी प्राथमिकता है। यदि आप भारत के निवासी हैं, तो आपके पास निम्नलिखित अधिकार हैं:",
      content9: "आपके बारे में संग्रहित व्यक्तिगत डेटा तक पहुँचने का अधिकार।",
      content10: "आपकी व्यक्तिगत जानकारी में सुधार करने का अनुरोध करने का अधिकार।",
      content11: "डेटा प्रसंस्करण के लिए दी गई सहमति वापस लेने का अधिकार।",
      content12: "हम जो डेटा एकत्र करते हैं",
      content13: "हमारी वेबसाइट का उपयोग करके, आप स्वीकार करते हैं कि आपके पास इस नीति और नीचे वर्णित आपके व्यक्तिगत डेटा की प्रक्रिया के लिए कानूनी सहमति देने की क्षमता है।",
      content14: "01",
      content15: "वेबसाइट पर आप द्वारा प्रदान किया गया व्यक्तिगत डेटा",
      content16: "जब आप हमारे साथ पंजीकरण करते हैं या हमारी सेवाओं के साथ बातचीत करते हैं, तो आप हमें निम्नलिखित सहित व्यक्तिगत जानकारी प्रदान करते हैं:",
      content17: "ईमेल पता (खाता सत्यापन, संचार, और अपडेट के लिए उपयोग किया जाता है)।",
      content18: "यूजरनेम (आपकी प्रोफाइल पर प्रदर्शित होता है और अपलोड की गई सामग्री से जुड़ा होता है)।",
      content19: "आपके उपयोगकर्ता डैशबोर्ड के माध्यम से प्रदान की गई कोई भी अतिरिक्त जानकारी।",
      content20: "यह जानकारी प्रदान करके, आप SanChi द्वारा इसे एकत्र, उपयोग और प्रकट करने के लिए सहमति देते हैं जैसा कि इस नीति में वर्णित है।",
      content21: "02",
      content22: "स्वचालित रूप से एकत्रित जानकारी",
      content23: "जब आप हमारी वेबसाइट का उपयोग करते हैं, तो SanChi आपके अनुभव को बेहतर बनाने और प्लेटफॉर्म की सुरक्षा सुनिश्चित करने के लिए स्वचालित रूप से कुछ जानकारी एकत्र करता है:",
      content24: "डिवाइस जानकारी (IP पता, ब्राउज़र प्रकार, ऑपरेटिंग सिस्टम)।",
      content25: "लॉग डेटा (टाइमस्टैम्प, देखे गए पृष्ठ, और इंटरैक्शन डेटा)।",
      content26: "03",
      content27: "कुकीज़",
      content28: "हम आपके अनुभव को बेहतर बनाने, वेबसाइट ट्रैफ़िक का विश्लेषण करने, और कार्यक्षमता बढ़ाने के लिए कुकीज़ का उपयोग करते हैं। आप अपने ब्राउज़र सेटिंग्स के माध्यम से अपनी कुकीज़ प्राथमिकताओं का प्रबंधन कर सकते हैं।",
      content29: "हमारी वेबसाइट का उपयोग करके, आप इस नीति में वर्णित अनुसार कुकीज़ के उपयोग के लिए सहमति देते हैं।",
      content30: "04",
      content31: "कानूनी आधार और उद्देश्य",
      content32: "SanChi आपके व्यक्तिगत डेटा को निम्नलिखित कानूनी आधारों पर प्रक्रिया करता है:",
      content33: "सहमति: जब आप स्पष्ट रूप से हमें आपके डेटा का उपयोग करने की अनुमति देते हैं।",
      content34: "वैध हित: वेबसाइट की सुरक्षा और कार्यक्षमता सुनिश्चित करने के लिए।",
      content35: "कानूनी दायित्वों का पालन: लागू नियामक आवश्यकताओं को पूरा करने के लिए।",
      content36: "हमारी वेबसाइट का उपयोग करके, आप आपके डेटा के एकत्रण और प्रसंस्करण से सहमत होते हैं जैसा कि वर्णित है।",
      content37: "डेटा प्रसंस्करण का उद्देश्य",
      content38: "आपके व्यक्तिगत डेटा की प्रक्रिया निम्नलिखित उद्देश्यों के लिए की जाती है:",
      content39: "उपयोगकर्ता प्रमाणीकरण और खाता प्रबंधन: उपयोगकर्ता डैशबोर्ड और व्यवस्थापक कार्यक्षमताओं तक पहुँच।",
      content40: "वीडियो अपलोड और स्ट्रीमिंग: वीडियो अपलोड का प्रबंधन करना और हमारी प्लेटफॉर्म पर पहले से रिकॉर्ड किए गए वीडियो का स्ट्रीमिंग सक्षम करना।",
      content41: "स्टिकी नोट फीचर: उपयोगकर्ताओं को उनके डैशबोर्ड के भीतर व्यक्तिगत स्टिकी नोट्स बनाने और प्रबंधित करने की अनुमति देना।",
      content42: "ऑडियो बुक फीचर: हमारी प्लेटफॉर्म पर उपलब्ध विभिन्न ऑडियो बुक्स तक पहुँच प्रदान करना।",
      content43: "संचार और समर्थन: महत्वपूर्ण अपडेट, सुरक्षा अलर्ट, और ग्राहक समर्थन जानकारी भेजना।",
      content44: "डेटा संग्रहण की शर्तें",
      content45: "हम आपके डेटा को तब तक संग्रहित करते हैं जब तक कि इस नीति में वर्णित उद्देश्यों को पूरा करने के लिए आवश्यक हो, जिसमें शामिल हैं:",
      content46: "हमारी सेवाएं प्रदान करना (उपयोगकर्ता डैशबोर्ड, वीडियो स्ट्रीमिंग, स्टिकी नोट्स, और ऑडियोबुक)।",
      content47: "विवादों को सुलझाना और धोखाधड़ी को रोकना।",
      content48: "उपयोगकर्ता के अधिकार",
      content49: "हम जो डेटा एकत्र करते हैं",
      content50: "प्रदत्त व्यक्तिगत डेटा",
      content51: "स्वचालित रूप से एकत्रित डेटा",
      content52: "कुकीज़",
      content53: "कानूनी आधार और उद्देश्य",
      content54: "डेटा प्रसंस्करण का उद्देश्य",
      content55: "डेटा संग्रहण की शर्तें",
      content56: "गोपनीयता नीति",
      content58: `अंतिम अपडेट: फ़रवरी 02,2025 <br/>
प्रकाशित: जनवरी 12,2025`,

      content107: `होम`,
      content108: `परिचय`,
      content109: `भाषा`,
      content110: `संपर्क`,
      content111: `संसाधन`,
      content112: `डैशबोर्ड`,



          // footer
    content201: `© 2025 विद्यालंकार पॉलिटेक्निक। सर्वाधिकार सुरक्षित।`,
    content202: `गोपनीयता नीति`,
    content203: `गैलरी`,
    content204: `"स्वयंसेवा मानव होने की मूल आत्मा में है। किसी ने भी जीवन में बिना किसी अन्य की मदद के नहीं चला है।" — हेदर फ्रेंच हेनरी`,
    content205: `आविष्कारक`,
    content206: `स्पॉन्सर्स`,


    // footer end
    },
    marathi: {
      content1: "ही डेटा संकलन आणि प्रक्रिया धोरण, किंवा गोपनीयता धोरण (यापुढे 'धोरण' म्हणून उल्लेखित) स्पष्ट करते की SanChi आपल्या बद्दलची माहिती कशी संकलित, वापर, संग्रहित आणि प्रकटीकरण करते जेव्हा आपण आमच्या वेबसाइटला भेट देता.",
      content2: "आपण येथे आपल्या वैयक्तिक डेटाच्या प्रक्रियेस सहमती देता आणि पुष्टी करता की आपल्याला प्रक्रियेची, उद्देशाची आणि इतर अटींची माहिती देण्यात आली आहे, जी लागू असलेल्या नियमांनुसार आहे, ज्यात EU GDPR, कॅलिफोर्निया CCPA आणि इतर संबंधित कायदे यांचा समावेश आहे.",
      content3: "वेबसाइटवरील संबंधित फॉर्म्सद्वारे आपल्या बद्दलची कोणतीही माहिती पुरवून, आपण या धोरणाशी सहमत आहात आणि SanChi ला खालील नमूद उद्देशांसाठी आपली माहिती संकलित, वापर आणि प्रकटीकरण करण्याची परवानगी देता.",
      content4: "याव्यतिरिक्त, जर आपण भारतातील रहिवासी असाल, तर आपली वैयक्तिक माहिती लागू असलेल्या भारतीय डेटा संरक्षण नियमांनुसार प्रक्रिया केली जाते, ज्यामध्ये माहिती तंत्रज्ञान कायदा, 2000 आणि IT (उपयुक्त सुरक्षा पद्धती व प्रक्रियाआणि संवेदनशील वैयक्तिक डेटा किंवा माहिती) नियम, 2011 यांचा समावेश आहे. हे कायदे आपल्याला आपल्या वैयक्तिक डेटापर्यंत प्रवेश, दुरुस्ती आणि जिथे परवानगी आहे तिथे त्याचे विलोपन करण्याचा अधिकार प्रदान करतात. कोणत्याही चौकशीसाठी किंवा डेटासंबंधी विनंत्यांसाठी, कृपया आमच्याशी SanChi.educate@gmail.com वर संपर्क साधा.",
      content5: "आमच्या वेबसाइटचा वापर सुरू ठेवून, आपण हे मान्य करता की आपल्याकडे या धोरणास सहमती देण्याची आणि आपल्या वैयक्तिक डेटाची प्रक्रिया करण्याची कायदेशीर क्षमता आहे, आपल्या क्षेत्राच्या कायद्यांनुसार.",
      content6: "आम्ही या धोरणात कोणत्याही वेळी बदल करण्याचा अधिकार राखून ठेवतो. कोणतेही बदल या मजकुराच्या शीर्षस्थानी तारीख अद्यतन करून सूचित केले जातील. आपली गोपनीयता कशी संरक्षित केली जाते याची माहिती ठेवण्यासाठी आम्ही आपल्याला धोरणाची नियमितपणे पुनरावलोकन करण्याचा सल्ला देतो.",
      content7: "वापरकर्त्याचे अधिकार",
      content8: "SanChi मध्ये, आपली गोपनीयता ही आमची प्राधान्य आहे. जर आपण भारताचे रहिवासी असाल, तर आपल्याकडे खालील अधिकार आहेत:",
      content9: "आपल्याबद्दल संग्रहित केलेल्या वैयक्तिक डेटापर्यंत प्रवेश करण्याचा अधिकार.",
      content10: "आपल्या वैयक्तिक माहितीत दुरुस्ती करण्याची विनंती करण्याचा अधिकार.",
      content11: "डेटा प्रक्रियेसाठी दिलेली सहमती मागे घेण्याचा अधिकार.",
      content12: "आपण जो डेटा संकलित करतो",
      content13: "आमच्या वेबसाइटचा वापर करून, आपण हे मान्य करता की आपल्याकडे खालील प्रमाणे आपल्या वैयक्तिक डेटाची प्रक्रिया करण्यास सहमती देण्याची कायदेशीर क्षमता आहे.",
      content14: "01",
      content15: "आपण आमच्याकडे पुरविलेली वैयक्तिक माहिती",
      content16: "जेव्हा आपण आमच्या सेवा वापरता किंवा नोंदणी करता, तेव्हा आपण आमच्याकडे खालील प्रमाणे वैयक्तिक माहिती पुरवता:",
      content17: "ईमेल पत्ता (खाते पडताळणी, संवाद, आणि अद्यतने यासाठी वापरला जातो).",
      content18: "वापरकर्तानाव (आपल्या प्रोफाइलवर दर्शविले जाते आणि अपलोड केलेल्या सामग्रीशी संबंधित असते).",
      content19: "आपल्या वापरकर्ता डॅशबोर्डद्वारे पुरविलेली इतर कोणतीही माहिती.",
      content20: "ही माहिती पुरवून, आपण SanChi कडून ती संकलित, वापरणे आणि प्रकटीकरण करण्यास सहमती देता जसे की या धोरणात नमूद आहे.",
      content21: "02",
      content22: "स्वतःहून संकलित माहिती",
      content23: "जेव्हा आपण आमची वेबसाइट वापरता, तेव्हा SanChi आपला अनुभव सुधारण्यासाठी आणि प्लॅटफॉर्मची सुरक्षा सुनिश्चित करण्यासाठी काही माहिती आपोआप संकलित करते:",
      content24: "डिव्हाइस माहिती (IP पत्ता, ब्राउझर प्रकार, ऑपरेटिंग सिस्टम).",
      content25: "लॉग डेटा (टाइमस्टॅम्प, भेट दिलेली पृष्ठे, आणि संवादाची माहिती).",
      content26: "03",
      content27: "कुकीज",
      content28: "आम्ही आपला अनुभव सुधारण्यासाठी, वेबसाइट ट्रॅफिकचे विश्लेषण करण्यासाठी आणि कार्यक्षमता वाढवण्यासाठी कुकीज वापरतो. आपण आपल्या ब्राउझर सेटिंग्जद्वारे आपल्या कुकीजच्या पसंतीचे व्यवस्थापन करू शकता.",
      content29: "आमच्या वेबसाइटचा वापर करून, आपण या धोरणात नमूद केल्याप्रमाणे कुकीजच्या वापरास सहमती देता.",
      content30: "04",
      content31: "कायदेशीर आधार आणि उद्दिष्टे",
      content32: "SanChi आपली वैयक्तिक माहिती खालील कायदेशीर आधारांवर प्रक्रिया करते:",
      content33: "सहमती: जेव्हा आपण स्पष्टपणे आपला डेटा वापरण्याची परवानगी देता.",
      content34: "वैध हित: वेबसाइटची सुरक्षा आणि कार्यक्षमता सुनिश्चित करण्यासाठी.",
      content35: "कायदेशीर जबाबदाऱ्यांचे पालन: लागू असलेल्या नियामक आवश्यकता पूर्ण करण्यासाठी.",
      content36: "आमच्या वेबसाइटचा वापर करून, आपण आपली माहिती संकलित व प्रक्रियेस सहमती देता जसे की नमूद आहे.",
      content37: "डेटा प्रक्रियेचा उद्देश",
      content38: "आपली वैयक्तिक माहिती खालील उद्देशांसाठी प्रक्रिया केली जाते:",
      content39: "वापरकर्ता प्रमाणीकरण आणि खाते व्यवस्थापन: वापरकर्ता डॅशबोर्ड आणि अॅडमिन कार्यक्षमता प्रवेश.",
      content40: "व्हिडिओ अपलोड आणि स्ट्रीमिंग: व्हिडिओ अपलोडचे व्यवस्थापन करणे आणि आमच्या प्लॅटफॉर्मवर पूर्वनिर्देशित व्हिडिओंचे स्ट्रीमिंग सक्षम करणे.",
      content41: "स्टिकी नोट वैशिष्ट्य: वापरकर्त्यांना त्यांच्या डॅशबोर्डमध्ये वैयक्तिक स्टिकी नोट्स तयार आणि व्यवस्थापित करण्याची परवानगी देणे.",
      content42: "ऑडिओबुक वैशिष्ट्य: आमच्या प्लॅटफॉर्मवर उपलब्ध असलेल्या विविध ऑडिओबुक्सपर्यंत प्रवेश देणे.",
      content43: "संपर्क आणि समर्थन: महत्वाचे अद्यतने, सुरक्षा सूचना आणि ग्राहक समर्थन माहिती पाठवणे.",
      content44: "डेटा संग्रहणाच्या अटी",
      content45: "आम्ही आपल्या डेटाची संग्रहण करत राहतो जितके आवश्यक आहे जेणेकरून या धोरणात नमूद उद्देश पूर्ण होतील, ज्यामध्ये समाविष्ट आहे:",
      content46: "आमच्या सेवा पुरवणे (वापरकर्ता डॅशबोर्ड, व्हिडिओ स्ट्रीमिंग, स्टिकी नोट्स, आणि ऑडिओबुक्स).",
      content47: "वाद सोडवणे आणि फसवणूक टाळणे.",
      content48: "वापरकर्त्याचे अधिकार",
      content49: "आपण जो डेटा संकलित करतो",
      content50: "पुरवलेली वैयक्तिक माहिती",
      content51: "स्वतःहून संकलित डेटा",
      content52: "कुकीज",
      content53: "कायदेशीर आधार आणि उद्दिष्टे",
      content54: "डेटा प्रक्रियेचा उद्देश",
      content55: "डेटा संग्रहणाच्या अटी",
      content56:"गोपनीयता धोरण",
  
      content58:`शेवटचे अपडेट: फेब्रुवारी ०२, २०२५<br/>
प्रकाशित तारीख: जानेवारी १२, २०२५`,

      content107: `होम`,
      content108: `आमच्याबद्दल`,
      content109: `भाषा`,
      content110: `संपर्क`,
      content111: `संसाधने`,
      content112: `डॅशबोर्ड`,

    // footer
    content201: `© 2025 विद्यालंकार पॉलिटेक्निक। सर्व हक्क राखीवून ठेवले गेले आहेत।`,
    content202: `गोपनीयता धोरण`,
    content203: `गॅलरी`,
    content204: `"स्वयंसेवा ही मानव असण्याचा गाभा आहे. दुसऱ्याच्या मदतीशिवाय कोणीही आयुष्यात यशस्वी झालेले नाही." - हीदर फ्रेंच हेन्री`,
    content205: `आविष्कारक`,
    content206: `प्रायोजक`,

    // foter end

    }
  };
  
  

  
const fonts = {
    english: "Poppins",
    hindi: "Hind",
    marathi: "Tiro Devanagari Marathi",
  };
  
  // Toggle the visibility of the language menu (slide animation)
  function toggleLanguageMenu() {
    const languageMenu = document.getElementById("languages-section");
  
    if (languageMenu.style.top === "0px") {
      languageMenu.style.top = "-150vh"; // Hide it off-screen
    } else {
      languageMenu.style.top = "0"; // Slide it into view
    }
  }
  
  // Update the page content based on the selected language
  function updateLanguage(language) {
    // Set the language preference in a cookie
    document.cookie = "language=" + language;
  
    // Check if the content for the selected language exists
    if (content[language]) {
      // Update the innerHTML of elements based on language content
      Object.keys(content[language]).forEach((key) => {
        const element = document.getElementById(key);
        if (element) {
          element.innerHTML = content[language][key];
        }
      });
  
      // Update the font family for the entire body based on the language
      if (fonts[language]) {
        document.body.style.fontFamily = fonts[language];
      }
  
      // Apply additional style changes specific to the language
    }
  
    // Hide the languages section and restore page overflow
    const languagesSection = document.getElementById("languages-section");
    if (languagesSection) {
      languagesSection.style.top = "-150vh";
    }
    document.body.style.overflow = "auto";
  
    // Adjust font size specifically for Marathi
    const contentElement = document.getElementById("content1");

  }
  
  // Get the value of a cookie by name
  function getCookie(name) {
    const cookies = document.cookie.split("; ").reduce((acc, cookie) => {
      const [key, value] = cookie.split("=");
      acc[key] = value;
      return acc;
    }, {});
    return cookies[name];
  }
  

  // language conversion end
  
  // language section for desktop
  document.addEventListener("DOMContentLoaded", () => {
    const languageToggle = document.getElementById("language-toggle");
    languageToggle.addEventListener("click", toggleLanguageMenu);
  
    const closingButton = document.getElementById("closing-span");
    closingButton.addEventListener("click", toggleLanguageMenu);
  
    const englishOption = document.getElementById("english-option");
    const hindiOption = document.getElementById("hindi-option");
    const marathiOption = document.getElementById("marathi-option");
  
    englishOption.addEventListener("click", () => updateLanguage("english"));
    hindiOption.addEventListener("click", () => updateLanguage("hindi"));
    marathiOption.addEventListener("click", () => updateLanguage("marathi"));
  
    const language = getCookie("language") || "english"; // Default to English
    updateLanguage(language);
  });
  // language section for desktop end
  
  // language section for mobile
  document.addEventListener("DOMContentLoaded", () => {
    const languageToggle = document.getElementById("language-toggle1");
    languageToggle.addEventListener("click", toggleLanguageMenu);
  
    const closingButton = document.getElementById("closing-span");
    closingButton.addEventListener("click", toggleLanguageMenu);
  
    const englishOption = document.getElementById("english-option");
    const hindiOption = document.getElementById("hindi-option");
    const marathiOption = document.getElementById("marathi-option");
  
    englishOption.addEventListener("click", () => updateLanguage("english"));
    hindiOption.addEventListener("click", () => updateLanguage("hindi"));
    marathiOption.addEventListener("click", () => updateLanguage("marathi"));
  
    const language = getCookie("language") || "english"; // Default to English
    updateLanguage(language);
  });
  // language section for mobile ends