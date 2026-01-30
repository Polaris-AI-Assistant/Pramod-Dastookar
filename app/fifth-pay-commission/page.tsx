"use client";
import { useState, useEffect } from 'react';
import { Berkshire_Swash, Playfair_Display, Tiro_Devanagari_Marathi } from 'next/font/google';
import { 
  Scale, 
  Languages,
  Calendar,
  User,
  MapPin,
  ArrowLeft,
  BookOpen,
  Award,
  Users,
  Landmark,
  Quote,
  CheckCircle
} from 'lucide-react';
import Navbar from '@/components/navbar';
import Link from 'next/link';

const berkshireSwash = Berkshire_Swash({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-berkshire',
});

const playfairDisplay = Playfair_Display({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-playfair',
});

const marathiFont = Tiro_Devanagari_Marathi({
  weight: '400',
  subsets: ['devanagari'],
  variable: '--font-marathi',
});

export default function FifthPayCommissionPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMarathi, setIsMarathi] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const payCommissionHistory = [
    { year: "1947", commission: "1st Pay Commission", increase: "40%" },
    { year: "1959", commission: "2nd Pay Commission", increase: "50%" },
    { year: "1973", commission: "3rd Pay Commission", increase: "25%" },
    { year: "1986", commission: "4th Pay Commission", increase: "40%" },
    { year: "1997", commission: "5th Pay Commission", increase: "35%" },
    { year: "2006", commission: "6th Pay Commission", increase: "40%" },
  ];

  const payCommissionHistoryMr = [
    { year: "१९४७", commission: "प्रथम वेतन आयोग", increase: "४०%" },
    { year: "१९५९", commission: "द्वितीय वेतन आयोग", increase: "५०%" },
    { year: "१९७३", commission: "तृतीय वेतन आयोग", increase: "२५%" },
    { year: "१९८६", commission: "चतुर्थ वेतन आयोग", increase: "४०%" },
    { year: "१९९७", commission: "पंचम वेतन आयोग", increase: "३५%" },
    { year: "२००६", commission: "षष्ठम वेतन आयोग", increase: "४०%" },
  ];

  const supporters = [
    "Anantrao Deshmukh", "P.M. Patil", "Sulabha Munde", "U.R. Thombal", 
    "G.S. Burande", "D.B. Dhumre", "Anand Bhandare", "R.G. Jadhav", 
    "I.N. Jadhav", "B.T. Sangale", "Ramdas Chinchore", "Subhash Patil",
    "Takbhate", "Sabne", "Sayyed", "Munde", "Rakhe", "Shinde", "Anerao Sir",
    "Bhagwan Salunkhe", "Nagoji Ganar", "Rajabhau Udgirkar"
  ];

  const supportersMr = [
    "अनंतराव देशमुख", "प.म. पाटील", "सुलभा मुंडे", "यु.आर. थोंबाळ", 
    "जी.एस. बुरांडे", "द.बा. धुमरे", "आनंद भंडारे", "आर.जी. जाधव", 
    "इ.ना. जाधव", "बी.टी. सांगळे", "रामदास चिंचोळे", "सुभाष पाटील",
    "ताकभाते", "साबने", "सय्यद", "मुंडे", "राखे", "शिंदे", "आनेराव सर",
    "भगवान साळुंखे", "नागोजी गणार", "राजाभाऊ उदगीरकर"
  ];

  return (
    <>
      <Navbar />
      <div className={`min-h-screen w-full relative overflow-hidden bg-[#FAF9F6] pt-16 sm:pt-20 ${berkshireSwash.variable} ${playfairDisplay.variable}`}>
        {/* Main content */}
        <div className={`relative z-10 max-w-5xl mx-auto px-6 pt-8 pb-20 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          
          {/* Back Button & Language Toggle */}
          <div className="flex justify-between items-center mb-8">
            <Link 
              href="/pg-dastoorkar"
              className="flex items-center gap-2 text-gray-600 hover:text-amber-700 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className={isMarathi ? marathiFont.className : ''}>
                {isMarathi ? 'मागे जा' : 'Back'}
              </span>
            </Link>
            
            <button
              onClick={() => setIsMarathi(!isMarathi)}
              className="flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 bg-white border border-amber-200 hover:border-amber-400 shadow-sm"
              style={{ color: '#A68229' }}
            >
              <Languages className="w-4 h-4" />
              <span className={`text-sm font-medium ${isMarathi ? marathiFont.className : ''}`}>
                {isMarathi ? 'English' : 'मराठी'}
              </span>
            </button>
          </div>

          {/* Header Section */}
          <div className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <Scale className="w-8 h-8" style={{ color: '#A68229' }} />
              <span className={`text-lg tracking-[0.3em] uppercase font-semibold ${isMarathi ? marathiFont.className : ''}`} style={{ color: '#A68229' }}>
                {isMarathi ? 'पाचवा वेतन आयोग' : 'FIFTH PAY COMMISSION'}
              </span>
            </div>
            
            <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 ${isMarathi ? marathiFont.className : ''}`} style={{ fontFamily: isMarathi ? 'var(--font-marathi)' : 'var(--font-playfair)' }}>
              {isMarathi 
                ? 'पी.जी. दस्तुरकर सरांची पाचव्या वेतन आयोगाच्या अंमलबजावणीतील भूमिका' 
                : "P.G. Dastoorkar Sir's Role in Fifth Pay Commission Implementation"}
            </h1>
            
            <div className="w-48 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mb-6" />
            
            {/* Author Info */}
            <div className={`flex flex-wrap items-center justify-center gap-6 text-gray-600 text-sm ${isMarathi ? marathiFont.className : ''}`}>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{isMarathi ? 'लेखक: प्रा. सुभाष दिगंबर दगडे' : 'Author: Prof. Subhash Digambar Dagade'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{isMarathi ? '१५ वे स्मरण दिन — २७ एप्रिल २०२५' : '15th Remembrance Day — 27 April 2025'}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{isMarathi ? 'बाणेर, पुणे' : 'Baner, Pune'}</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <article className={`prose prose-lg max-w-none ${isMarathi ? marathiFont.className : ''}`} style={{ fontFamily: isMarathi ? 'var(--font-marathi)' : 'system-ui, sans-serif' }}>
            
            {/* Introduction Section */}
            <section className={`bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-amber-100 mb-8 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-6 h-6" style={{ color: '#A68229' }} />
                <h2 className="text-xl font-bold text-gray-900 m-0" style={{ fontFamily: isMarathi ? 'var(--font-marathi)' : 'var(--font-playfair)' }}>
                  {isMarathi ? 'प्रस्तावना' : 'Introduction'}
                </h2>
              </div>
              {isMarathi ? (
                <p className="text-gray-700 leading-relaxed m-0">
                  पी.जी. दस्तुरकर सर विधान परिषदेमध्ये सन १९९२ ते १९९६ या सहा वर्षांच्या काळात शिक्षक आमदार म्हणून कार्य करतांना शिक्षक, शिक्षण, शाळा यांना न्याय मिळवून देण्यासाठी सभागृहात महाराष्ट्र सरकारला असंख्य वेळा धारेवर धरून मोठा लढा उभा केला होता. विशेषत: त्यांनी महाराष्ट्र राज्यातील शिक्षकांना पाचवा वेतन आयोग केंद्र सरकारच्या शिक्षकाप्रमाणे लागू करण्यासाठी विशेष प्रयत्न केले.
                </p>
              ) : (
                <p className="text-gray-700 leading-relaxed m-0">
                  P.G. Dastoorkar Sir served as a Teacher-MLC in the Legislative Council from 1992 to 1996. During this six-year period, he fought tirelessly for justice for teachers, education, and schools, often challenging the Maharashtra Government in the Assembly multiple times. Particularly, he made special efforts to ensure that the Fifth Pay Commission was implemented for Maharashtra&apos;s teachers on par with Central Government teachers.
                </p>
              )}
            </section>

            {/* The Struggle Section */}
            <section className={`bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-amber-100 mb-8 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <div className="flex items-center gap-3 mb-4">
                <Landmark className="w-6 h-6" style={{ color: '#A68229' }} />
                <h2 className="text-xl font-bold text-gray-900 m-0" style={{ fontFamily: isMarathi ? 'var(--font-marathi)' : 'var(--font-playfair)' }}>
                  {isMarathi ? 'संघर्ष आणि कार्यशैली' : 'The Struggle & Working Style'}
                </h2>
              </div>
              {isMarathi ? (
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p className="m-0">
                    पी.जी. दस्तुरकर सर विधान भवनातील वाचनालयामध्ये वाचन करून त्याची टिपणे काढून प्रश्न अभ्यासपूर्ण मांडत असत. गुरुजी आमदार म्हणून कामावर रुजू झाल्यापासून त्यांनी शिक्षकांचे विविध पातळीवरील प्रश्न सद्‌सद्‌विवेक बुद्धीला स्मरून मांडले आहेत.
                  </p>
                  <p className="m-0">
                    शिक्षण क्षेत्रात एक चळवळी शिक्षक म्हणून त्यांचा नावलौकिक होता. नांदेड शहरातील मिट्टीका शेर गल्लीत &quot;मोईन भाई&quot; यांच्या घरी ते किरायाने राहत आणि चळवळ करीत असल्यामुळे त्यांना लोक <strong>&quot;अस्सल मातीतला शेर&quot;</strong> असे म्हणत असत.
                  </p>
                  <p className="m-0">
                    पी.जी. दस्तुरकर सर मार्क्सवादी विचाराने भारलेले होते. त्यामुळे शिक्षक चळवळीला आणि शिक्षण चळवळीला वेगळीच धार असे.
                  </p>
                </div>
              ) : (
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p className="m-0">
                    P.G. Dastoorkar Sir would read extensively in the Legislative Assembly library, take meticulous notes, and present questions in a well-researched manner. Since joining as a Teacher-MLC, he had conscientiously raised various issues affecting teachers at multiple levels.
                  </p>
                  <p className="m-0">
                    He was renowned as an activist-teacher in the education sector. He lived on rent in the house of &quot;Moin Bhai&quot; in Mittika Sher Galli, Nanded, and because of his relentless activism, people called him <strong>&quot;The Real Lion of the Soil&quot;</strong> (Assal Matitla Sher).
                  </p>
                  <p className="m-0">
                    P.G. Dastoorkar Sir was deeply influenced by Marxist ideology, which gave a unique edge to both the teacher movement and the education movement.
                  </p>
                </div>
              )}
            </section>

            {/* The Fifth Pay Commission Battle */}
            <section className={`bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-amber-100 mb-8 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-6 h-6" style={{ color: '#A68229' }} />
                <h2 className="text-xl font-bold text-gray-900 m-0" style={{ fontFamily: isMarathi ? 'var(--font-marathi)' : 'var(--font-playfair)' }}>
                  {isMarathi ? 'पाचव्या वेतन आयोगाचा लढा' : 'The Fifth Pay Commission Battle'}
                </h2>
              </div>
              {isMarathi ? (
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p className="m-0">
                    भारतीय जनता पक्ष आणि शिवसेना सरकारच्या काळात शिक्षक आणि शिक्षणाच्या संदर्भात अनेक प्रश्न निर्माण झाले होते. त्यापैकी एक म्हणजे पाचवा वेतन आयोग — केंद्र सरकारच्या शिक्षकाप्रमाणे महाराष्ट्रातील शिक्षकांना लागू करणे बाबतचा होता.
                  </p>
                  <p className="m-0">
                    महाराष्ट्र शिक्षक मंडळ आणि पी.जी. दस्तुरकर सर यांनी यासाठी मोठा संघर्ष केला. त्यावेळी शिक्षण मंत्री श्री <strong>सुधीरभाऊ जोशी</strong> आणि गृहमंत्री <strong>गोपीनाथराव मुंडे</strong> यांच्या अध्यक्षतेखाली झालेल्या बैठकीमध्ये पाचव्या वेतन आयोगाप्रमाणे महाराष्ट्रातील शिक्षकांना ५वा वेतन लागू करण्याबाबतचा विषय होता.
                  </p>
                  <p className="m-0">
                    तेव्हा <strong>र.ग. कर्णिक सर</strong> आणि <strong>पी.जी. दस्तुरकर सर</strong> यांच्या समवेत <strong>३.३० तास</strong> बैठक चालली. बैठकीमध्ये विविध विषयावर चर्चा झाली. वेतनवृद्धीसाठीचे मुद्दे र.ग. कर्णिक आणि पी.जी. दस्तुरकर यांनी नेटाने मांडले आणि पाचवा वेतन आयोगाप्रमाणे शिक्षकांना वेतनवृद्धी मिळाली.
                  </p>
                </div>
              ) : (
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p className="m-0">
                    During the BJP–Shiv Sena government era, many issues arose concerning teachers and education. One of the most prominent was the Fifth Pay Commission — specifically, implementing it for Maharashtra&apos;s teachers on par with Central Government teachers.
                  </p>
                  <p className="m-0">
                    Maharashtra Shikshak Mandal and P.G. Dastoorkar Sir waged a significant struggle for this cause. A crucial meeting was held under the chairmanship of Education Minister <strong>Sudhirbhau Joshi</strong> and Home Minister <strong>Gopinathrao Munde</strong> regarding the implementation of the 5th Pay Commission for Maharashtra&apos;s teachers.
                  </p>
                  <p className="m-0">
                    The meeting with <strong>R.G. Karnik Sir</strong> and <strong>P.G. Dastoorkar Sir</strong> lasted <strong>3.5 hours</strong>. Various topics were discussed, and the points for salary increase were firmly presented by R.G. Karnik and P.G. Dastoorkar. As a result, teachers received the pay increase as per the Fifth Pay Commission.
                  </p>
                </div>
              )}
            </section>

            {/* Contract Teacher Issue */}
            <section className={`bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-amber-100 mb-8 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6" style={{ color: '#A68229' }} />
                <h2 className="text-xl font-bold text-gray-900 m-0" style={{ fontFamily: isMarathi ? 'var(--font-marathi)' : 'var(--font-playfair)' }}>
                  {isMarathi ? 'कंत्राटी शिक्षक प्रश्न' : 'The Contract Teacher Issue'}
                </h2>
              </div>
              {isMarathi ? (
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p className="m-0">
                    पाचव्या वेतन आयोगाच्या काळात आलेला महत्त्वाचा प्रश्न म्हणजे कंत्राटी शिक्षकाचा होता. कंत्राटी म्हणजे बांधलेला शिक्षक ही संकल्पना पी.जी. दस्तुरकर सरांना मान्य नव्हती. त्यांच्या मते शिक्षक हा <strong>सोशल इंजिनिअर &quot;सामाजिक अभियंता&quot;</strong> असतो.
                  </p>
                  <p className="m-0">
                    समाजाला लागणाऱ्या विविध घटकांची बांधणी शिक्षक शिक्षणातून करीत असतो. शिक्षक हा बुद्धीजीवी आहे — श्रमजीवी नाही. विद्यार्थ्यांना ज्ञानदान करण्याचे कार्य खऱ्या अर्थाने ज्ञान सेवा देण्याचे कार्य शिक्षक करतो.
                  </p>
                  <p className="m-0">
                    तो पूर्णवेळ असायला हवा. तो कंत्राटी असू नये. शिक्षक हा मानसिक दृष्ट्या आणि शारीरिक दृष्ट्या सदृढ असावा. तो पूर्ण वेळ शिक्षण सेवा देतो, तो सेवानिवृत्तीनंतरही आपली सेवा देत असतो.
                  </p>
                  <p className="m-0">
                    त्यामुळे कंत्राटी शिक्षक पद नको याची अभ्यासपूर्ण मांडणी केल्यामुळे शिक्षण मंत्री आणि गृहमंत्र्यांच्या बैठकीमध्ये दोन्ही मंत्र्यांनी र.ग. कर्णिक सर आणि पी.जी. दस्तुरकर सर यांचे म्हणणे मान्य करून <strong>कंत्राटी शिक्षक पद काढून टाकले</strong> — हा शिक्षक चळवळीचा मोठा विजय होता.
                  </p>
                </div>
              ) : (
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p className="m-0">
                    An important issue during the Fifth Pay Commission era was that of contract teachers. P.G. Dastoorkar Sir did not accept the concept of a &quot;contract teacher&quot; — essentially a tied or bound teacher. According to him, a teacher is a <strong>Social Engineer</strong>.
                  </p>
                  <p className="m-0">
                    A teacher builds the various components needed by society through education. A teacher is an intellectual — not a laborer. The work of imparting knowledge to students is truly a service of providing knowledge.
                  </p>
                  <p className="m-0">
                    A teacher should be full-time, not contractual. A teacher should be mentally and physically healthy. They provide full-time educational service and continue to serve even after retirement.
                  </p>
                  <p className="m-0">
                    Due to this well-researched presentation against the contract teacher position, both ministers in the meeting with the Education Minister and Home Minister accepted the argument of R.G. Karnik Sir and P.G. Dastoorkar Sir, and <strong>the contract teacher post was abolished</strong> — this was a major victory for the teacher movement.
                  </p>
                </div>
              )}
            </section>

            {/* Historical Salary Increases */}
            <section className={`bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-amber-100 mb-8 transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6" style={{ color: '#A68229' }} />
                <h2 className="text-xl font-bold text-gray-900 m-0" style={{ fontFamily: isMarathi ? 'var(--font-marathi)' : 'var(--font-playfair)' }}>
                  {isMarathi ? 'ऐतिहासिक वेतनवाढ' : 'Historical Salary Increases'}
                </h2>
              </div>
              {isMarathi ? (
                <p className="text-gray-700 leading-relaxed mb-6">
                  पाचव्या वेतन आयोगानुसार केंद्रसरकारच्या शिक्षकाप्रमाणे राज्य सरकारच्या शिक्षकांना वेतनवृद्धी मिळावी यासाठी र.ग. कर्णिक सर आणि पी.जी. दस्तुरकर सर यांनी अभ्यासपूर्ण आकडेवारीसह प्रभावी मांडणी केल्यामुळे शिक्षकांना ३५ टक्के वेतनवृद्धी मिळाली.
                </p>
              ) : (
                <p className="text-gray-700 leading-relaxed mb-6">
                  To ensure that state government teachers received a salary increase on par with central government teachers as per the Fifth Pay Commission, R.G. Karnik Sir and P.G. Dastoorkar Sir made an effective presentation with well-researched data, resulting in teachers receiving a 35% salary increase.
                </p>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 not-prose">
                {(isMarathi ? payCommissionHistoryMr : payCommissionHistory).map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-amber-50/50 border border-amber-100">
                    <div className={isMarathi ? marathiFont.className : ''}>
                      <span className="font-bold text-gray-900">{item.year}</span>
                      <span className="text-gray-600 text-sm block">{item.commission}</span>
                    </div>
                    <span className="font-bold text-2xl" style={{ color: '#A68229' }}>{item.increase}</span>
                  </div>
                ))}
              </div>
              {isMarathi ? (
                <p className="text-gray-700 leading-relaxed mt-6">
                  परंतु भाजप सरकारच्या काळात झालेल्या सातव्या वेतन आयोगानुसार फक्त १४ टक्के वेतनवृद्धी मिळाली. भाजप सरकारने जुनी निवृत्ती वेतन योजना रद्द केली.
                </p>
              ) : (
                <p className="text-gray-700 leading-relaxed mt-6">
                  However, under the Seventh Pay Commission during the BJP government era, only a 14% salary increase was granted. The BJP government also abolished the old pension scheme.
                </p>
              )}
            </section>

            {/* Legislative Achievements */}
            <section className={`bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-amber-100 mb-8 transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6" style={{ color: '#A68229' }} />
                <h2 className="text-xl font-bold text-gray-900 m-0" style={{ fontFamily: isMarathi ? 'var(--font-marathi)' : 'var(--font-playfair)' }}>
                  {isMarathi ? 'विधिमंडळातील कामगिरी' : 'Legislative Achievements'}
                </h2>
              </div>
              {isMarathi ? (
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p className="m-0">
                    पी.जी. दस्तुरकर सर यांनी शिक्षक आमदारकीच्या काळात शिक्षक चळवळीच्या माध्यमातून शिक्षकांना सेवा शाश्वती, शिक्षकांचा बँकेतून पगार करण्याची पद्धती, शिक्षण कायदा यासारखी विधेयके मांडून शिक्षकांच्या जीवनात क्रांती घडवून आणली होती.
                  </p>
                  <p className="m-0">
                    शिक्षक आमदार म्हणून शिक्षक आणि शिक्षणाच्या विविध प्रश्नांवरील त्यांची भाषणे अभ्यासपूर्ण असत. निष्कलंक चारित्र्य, स्पष्टवक्तेपणा, हजरजबाबीपणा, चौफेर नजर, अभ्यासूवृत्ती, प्रभावी वक्तृत्व, उत्तम आणि बिनचूक मांडणी, आकडेवारी आणि तात्कालीक संदर्भ, संघटनेशी बांधिलकी, स्पष्ट आणि मोठा आवाज यामुळे त्यांची भाषणे गाजली.
                  </p>
                  <p className="m-0">
                    त्यामुळे महाराष्ट्र शासनाने पी.जी. दस्तुरकर सर या शिक्षक आमदाराचा <strong>&apos;उत्कृष्ट संसदपटू&apos;</strong> म्हणून गौरव केला.
                  </p>
                </div>
              ) : (
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p className="m-0">
                    During his tenure as Teacher-MLC, P.G. Dastoorkar Sir brought about a revolution in teachers&apos; lives through the teacher movement by presenting bills such as job security for teachers, payment of teachers&apos; salaries through banks, and education law.
                  </p>
                  <p className="m-0">
                    As a Teacher-MLC, his speeches on various issues concerning teachers and education were well-researched. His speeches became famous for his spotless character, straightforwardness, quick wit, comprehensive vision, studious nature, powerful oratory, excellent and flawless presentation, statistics and timely references, commitment to the organization, and clear and loud voice.
                  </p>
                  <p className="m-0">
                    As a result, the Government of Maharashtra honored P.G. Dastoorkar Sir, the Teacher-MLC, as <strong>&apos;Best Parliamentarian&apos;</strong>.
                  </p>
                </div>
              )}
            </section>

            {/* Supporters Section */}
            <section className={`bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-amber-100 mb-8 transition-all duration-1000 delay-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6" style={{ color: '#A68229' }} />
                <h2 className="text-xl font-bold text-gray-900 m-0" style={{ fontFamily: isMarathi ? 'var(--font-marathi)' : 'var(--font-playfair)' }}>
                  {isMarathi ? 'सहकाऱ्यांची साथ' : 'Comrades in the Struggle'}
                </h2>
              </div>
              {isMarathi ? (
                <p className="text-gray-700 leading-relaxed mb-4">
                  पी.जी. दस्तुरकर सर यांनी शिक्षक चळवळ पुढे नेण्यासाठी अपार कष्ट आणि मेहनत केली. त्यांना खालील लोकांनी मोलाची साथ दिली:
                </p>
              ) : (
                <p className="text-gray-700 leading-relaxed mb-4">
                  P.G. Dastoorkar Sir put in immense hard work and effort to take the teacher movement forward. He received invaluable support from the following people:
                </p>
              )}
              <div className="flex flex-wrap gap-2 not-prose">
                {(isMarathi ? supportersMr : supporters).map((name, i) => (
                  <span 
                    key={i} 
                    className={`px-3 py-1 rounded-full text-sm bg-amber-50 border border-amber-200 text-gray-700 ${isMarathi ? marathiFont.className : ''}`}
                  >
                    {name}
                  </span>
                ))}
              </div>
            </section>

            {/* Quote Section */}
            <section className={`p-8 rounded-2xl border-l-4 mb-8 transition-all duration-1000 delay-900 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`} style={{ borderColor: '#A68229', backgroundColor: 'rgba(166,130,41,0.05)' }}>
              <Quote className="w-8 h-8 mb-4" style={{ color: '#A68229' }} />
              <p className="text-xl italic text-gray-700 m-0" style={{ fontFamily: isMarathi ? 'var(--font-marathi)' : 'var(--font-playfair)' }}>
                {isMarathi 
                  ? '"भयमुक्त शिक्षक, भ्रष्टाचार मुक्त गुणात्मक शिक्षण, कर्तव्याचे अनुपालन आणि टक्कासाठी संघर्ष"' 
                  : '"Fear-free teachers, corruption-free quality education, fulfillment of duty, and struggle for rights"'}
              </p>
              <p className={`text-sm text-gray-600 mt-4 ${isMarathi ? marathiFont.className : ''}`}>
                — {isMarathi ? 'पी.जी. दस्तुरकर सर यांचे ब्रीदवाक्य' : "P.G. Dastoorkar Sir's Motto"}
              </p>
            </section>

            {/* Pay Revision Committee */}
            <section className={`bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-amber-100 mb-8 transition-all duration-1000 delay-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <div className="flex items-center gap-3 mb-4">
                <Landmark className="w-6 h-6" style={{ color: '#A68229' }} />
                <h2 className="text-xl font-bold text-gray-900 m-0" style={{ fontFamily: isMarathi ? 'var(--font-marathi)' : 'var(--font-playfair)' }}>
                  {isMarathi ? 'वेतन सुधारणा समिती' : 'State Pay Revision Committee'}
                </h2>
              </div>
              {isMarathi ? (
                <p className="text-gray-700 leading-relaxed m-0">
                  पाचव्या केंद्रीय वेतन आयोगाच्या शिफारशींवरील केंद्र सरकारचे निर्णय विचारात घेऊन राज्य शासकीय कर्मचारी व इतरांना सुधारित वेतनश्रेणीची शिफारस करण्यासाठी सेवानिवृत्त मुख्य सचिव श्री <strong>द.म. सुकथनकर</strong> यांच्या अध्यक्षतेखाली राज्य वेतन सुधारणा समिती १९९७ नेमण्यात आली. पी.जी. दस्तुरकर सर पाचव्या वेतन आयोगाचे सदस्य होते. त्यांच्या संघटनात्मक भूमिकेमुळे आणि कामातील योगदानामुळे शिक्षकांच्या वेतनात वाढ झाली आणि आर्थिक स्थिती सुधारण्यास मदत झाली.
                </p>
              ) : (
                <p className="text-gray-700 leading-relaxed m-0">
                  Taking into account the Central Government&apos;s decisions on the Fifth Central Pay Commission&apos;s recommendations, the State Pay Revision Committee 1997 was constituted under the chairmanship of retired Chief Secretary <strong>D.M. Sukthankar</strong> to recommend revised pay scales for state government employees and others. P.G. Dastoorkar Sir was a member of the Fifth Pay Commission. Due to his organizational role and contribution to the work, teachers&apos; salaries increased and their financial situation improved.
                </p>
              )}
            </section>

            {/* Legacy Section */}
            <section className={`bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-2xl p-8 border border-amber-200 mb-8 transition-all duration-1000 delay-1100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6" style={{ color: '#A68229' }} />
                <h2 className="text-xl font-bold text-gray-900 m-0" style={{ fontFamily: isMarathi ? 'var(--font-marathi)' : 'var(--font-playfair)' }}>
                  {isMarathi ? 'वारसा' : 'Legacy'}
                </h2>
              </div>
              {isMarathi ? (
                <p className="text-gray-700 leading-relaxed m-0">
                  पी.जी. दस्तुरकर म्हणजे शिक्षक चळवळ आणि शिक्षक चळवळ म्हणजे पी.जी. दस्तुरकर असे अभेद्य नाते चळवळीने निर्माण केले होते. शिक्षक, विद्यार्थी, शाळा, समाज आणि शिक्षण यांचा दर्जा सुधारायचा असेल तर शिक्षकांच्या दर्जात सुधारणा झाली पाहिजे आणि त्यासाठी म्हणून शिक्षकांचे वेतन, भत्ते, शाश्वती याची निश्चिती झाली पाहिजे — म्हणूनच पाचव्या वेतन आयोगाप्रमाणे शिक्षकांना वाढीव वेतन मिळाले पाहिजे यासाठी त्यांनी उभारलेल्या लढ्याला यश आले.
                </p>
              ) : (
                <p className="text-gray-700 leading-relaxed m-0">
                  The movement created an inseparable bond: P.G. Dastoorkar meant the teacher movement, and the teacher movement meant P.G. Dastoorkar. To improve the quality of teachers, students, schools, society, and education, the quality of teachers must improve, and for that, teachers&apos; salaries, allowances, and job security must be ensured — that is why the struggle he led for teachers to receive increased salaries as per the Fifth Pay Commission was successful.
                </p>
              )}
            </section>

            {/* Author Info */}
            <div className={`text-center text-gray-600 text-sm mt-12 pt-8 border-t border-amber-200 not-prose transition-all duration-1000 delay-1200 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            } ${isMarathi ? marathiFont.className : ''}`}>
              <p className="m-0">
                {isMarathi 
                  ? 'लेखक: डॉ. सुभाष दगडे — कासार मिशन प्रशासन, सातारा' 
                  : 'Author: Dr. Subhash Dagade — Kasar Mission Administration, Satara'}
              </p>
              <p className="m-0 mt-1">
                {isMarathi ? 'संपर्क: ९८५००७६३८७' : 'Contact: 9850076387'}
              </p>
            </div>

          </article>

          {/* Back to Top Button */}
          <div className="text-center mt-12">
            <Link 
              href="/pg-dastoorkar"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 bg-gradient-to-r hover:shadow-lg ${isMarathi ? marathiFont.className : ''}`}
              style={{ 
                background: 'linear-gradient(135deg, #A68229, #C9A83A)',
                color: 'white'
              }}
            >
              <ArrowLeft className="w-4 h-4" />
              {isMarathi ? 'मागे जा' : 'Back to P.G. Dastoorkar'}
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
