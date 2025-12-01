"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Berkshire_Swash, Playfair_Display, Tiro_Devanagari_Marathi } from 'next/font/google';
import { 
  Scale, 
  Users, 
  BookOpen, 
  Award, 
  Briefcase, 
  Heart,
  Quote,
  Calendar,
  MapPin,
  Landmark,
  Shield,
  Trophy,
  FileText,
  Languages,
  GraduationCap,
  Stethoscope,
  Building2,
  Coins,
  Vote,
  Sparkles,
  Target,
  HandHeart
} from 'lucide-react';
import Navbar from '@/components/navbar';

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

export default function PGDastoorkarPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMarathi, setIsMarathi] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const achievements = [
    { 
      title: "Teacher-MLC", 
      subtitle: "Elected voice for lakhs of teachers in Maharashtra Legislative Council (1992–1996)" 
    },
    { 
      title: "Best Parliamentarian", 
      subtitle: "Honoured by the Government of Maharashtra for exceptional legislative contributions" 
    },
    { 
      title: "Fifth Pay Commission", 
      subtitle: "Spearheaded the historic implementation benefiting all state teachers" 
    },
    { 
      title: "Movement Leader", 
      subtitle: "Celebrated as 'The Real Lion of the Soil' for his fearless advocacy" 
    }
  ];

  const payCommissionHistory = [
    { year: "1947", commission: "1st Pay Commission", party: "Congress", increase: "40%" },
    { year: "1959", commission: "2nd Pay Commission", party: "Congress", increase: "50%" },
    { year: "1973", commission: "3rd Pay Commission", party: "Congress", increase: "25%" },
    { year: "1986", commission: "4th Pay Commission", party: "Congress", increase: "40%" },
    { year: "1997", commission: "5th Pay Commission", party: "Congress", increase: "35%" },
    { year: "2006", commission: "6th Pay Commission", party: "Congress", increase: "40%" },
  ];

  const beliefs = [
    {
      title: "Teacher as Social Engineer",
      description: "A teacher shapes society through education and guidance, building the foundation for future generations.",
      icon: Users
    },
    {
      title: "Intellectual Worker",
      description: "Teachers are intellectual workers, not manual laborers. Their contribution to society transcends physical labor.",
      icon: BookOpen
    },
    {
      title: "Full-Time Dedication",
      description: "Teaching requires full-time commitment. Contract-based teaching undermines the sanctity of the profession.",
      icon: Briefcase
    },
    {
      title: "Lifelong Guidance",
      description: "A true teacher provides guidance even after retirement, continuing to shape lives beyond formal duties.",
      icon: Heart
    }
  ];

  const qualities = [
    "Impeccable character",
    "Clear and bold voice",
    "Effective oratory",
    "Strong organisational commitment",
    "Fact-based, well-structured arguments",
    "Deep understanding of teacher issues"
  ];

  const supporters = [
    "Anantrao Deshmukh", "P. M. Patil", "Sulabha Munde", "U. R. Thombal", 
    "G. S. Burande", "D. B. Dhumre", "Anand Bhandare", "R. G. Jadhav", 
    "I. N. Jadhav", "B. T. Sangle", "Ramdas Chinchole", "Subhash Patil",
    "Bhagwan Sanlukh", "Nagoji Ghanar", "Rajabhau Udgirkar"
  ];

  // Marathi Content
  const achievementsMr = [
    { 
      title: "शिक्षक आमदार", 
      subtitle: "महाराष्ट्रातील लाखो शिक्षकांचा निवडून आलेला आवाज (१९९२–१९९६)" 
    },
    { 
      title: "उत्कृष्ट संसदपटू", 
      subtitle: "अपवादात्मक विधिमंडळ योगदानासाठी महाराष्ट्र शासनाचा सन्मान" 
    },
    { 
      title: "पाचवा वेतन आयोग", 
      subtitle: "सर्व राज्य शिक्षकांना लाभ देणाऱ्या ऐतिहासिक अंमलबजावणीचे नेतृत्व" 
    },
    { 
      title: "चळवळीचे नेते", 
      subtitle: "निर्भय पुरस्कारासाठी 'अस्सल मातीतला शेर' म्हणून गौरव" 
    }
  ];

  const payCommissionHistoryMr = [
    { year: "१९४७", commission: "प्रथम वेतन आयोग", party: "काँग्रेस", increase: "४०%" },
    { year: "१९५९", commission: "द्वितीय वेतन आयोग", party: "काँग्रेस", increase: "५०%" },
    { year: "१९७३", commission: "तृतीय वेतन आयोग", party: "काँग्रेस", increase: "२५%" },
    { year: "१९८६", commission: "चतुर्थ वेतन आयोग", party: "काँग्रेस", increase: "४०%" },
    { year: "१९९७", commission: "पंचम वेतन आयोग", party: "काँग्रेस", increase: "३५%" },
    { year: "२००६", commission: "षष्ठम वेतन आयोग", party: "काँग्रेस", increase: "४०%" },
  ];

  const beliefsMr = [
    {
      title: "शिक्षक हा सोशल इंजिनियर",
      description: "शिक्षक समाजाला शिक्षण आणि मार्गदर्शनातून घडवतो, भविष्यातील पिढ्यांचा पाया रचतो.",
      icon: Users
    },
    {
      title: "बुद्धिजीवी कामगार",
      description: "शिक्षक हा बुद्धिजीवी आहे, श्रमजीवी नाही. त्यांचे समाजातील योगदान शारीरिक श्रमापेक्षा वरचे आहे.",
      icon: BookOpen
    },
    {
      title: "पूर्णवेळ समर्पण",
      description: "शिकवण्यासाठी पूर्णवेळ बांधिलकी आवश्यक आहे. कंत्राटी शिक्षण व्यवसायाच्या पावित्र्याला कमी करते.",
      icon: Briefcase
    },
    {
      title: "आजीवन मार्गदर्शन",
      description: "खरा शिक्षक सेवानिवृत्तीनंतरही मार्गदर्शन करतो, औपचारिक कर्तव्यांपलीकडे जीवन घडवत राहतो.",
      icon: Heart
    }
  ];

  const qualitiesMr = [
    "निष्कलंक चारित्र्य",
    "स्पष्टवक्तेपणा",
    "प्रभावी वक्तृत्व",
    "संघटनाप्रती बांधिलकी",
    "आकडेवारीसह बिनचूक मांडणी",
    "शिक्षकांच्या प्रश्नांची सखोल समज"
  ];

  const supportersMr = [
    "अनंतराव देशमुख", "प. म. पाटील", "सुलभा मुंडे", "यू. आर. थोंबाळ", 
    "जी.एस. बुरांडे", "द.बा. धुमरे", "आनंद भंडारे", "आर. जी. जाधव", 
    "इ. ना. जाधव", "बी. टी. सांगळे", "रामदास चिंचोळे", "सुभाष पाटील",
    "भगवान सांळुखे", "नागोजी गणार", "राजाभाऊ उदगीरकर"
  ];

  // Jnanaprabodhini - Social Contributions
  const socialContributions = [
    {
      year: "1993",
      title: "Nanded University Resolution",
      description: "Championed the establishment of a university in Nanded to bring higher education closer to Marathwada",
      icon: Building2,
      category: "Education"
    },
    {
      year: "1995",
      title: "Pay Commission for Central Employees",
      description: "Advocated for equitable pay scales, extending Pay Commission benefits to central government employees",
      icon: Coins,
      category: "Welfare"
    },
    {
      year: "1995",
      title: "National Medical Development Resolution",
      description: "Proposed a landmark resolution to strengthen India's healthcare infrastructure and medical education",
      icon: Stethoscope,
      category: "Healthcare"
    },
    {
      year: "1996",
      title: "Anti-Superstition Eradication Act",
      description: "Pioneered the passage of a historic resolution to combat blind faith and promote scientific temper",
      icon: Sparkles,
      category: "Social Reform"
    },
    {
      year: "—",
      title: "5th Pay Commission for Teachers",
      description: "Secured implementation of the 5th Pay Commission pay-scale for all Maharashtra teachers",
      icon: Scale,
      category: "Education"
    },
    {
      year: "—",
      title: "MBBS & MD Seat Allocation",
      description: "Ensured fair allocation and adjustment of medical seats in India and abroad for deserving students",
      icon: GraduationCap,
      category: "Healthcare"
    },
    {
      year: "—",
      title: "Marathwada & Vidarbha Education",
      description: "Made significant contributions to uplift education standards in underdeveloped Marathwada and Vidarbha regions",
      icon: Target,
      category: "Education"
    },
    {
      year: "—",
      title: "Local Development Fund for MLAs",
      description: "Successfully secured approval of Local Development Fund allocation for Legislative Council members",
      icon: Landmark,
      category: "Governance"
    },
    {
      year: "—",
      title: "Agricultural Labour Wages Tripled",
      description: "Fought for and achieved a threefold increase in wages for agricultural labourers across Maharashtra",
      icon: HandHeart,
      category: "Welfare"
    },
    {
      year: "—",
      title: "Teacher Election Policy Reform",
      description: "Introduced transformative policy changes in teacher election processes for greater transparency",
      icon: Vote,
      category: "Education"
    }
  ];

  const socialContributionsMr = [
    {
      year: "१९९३",
      title: "नांदेड विद्यापीठ ठराव",
      description: "मराठवाड्यात उच्च शिक्षण जवळ आणण्यासाठी नांदेड येथे विद्यापीठ स्थापनेचे समर्थन",
      icon: Building2,
      category: "शिक्षण"
    },
    {
      year: "१९९५",
      title: "केंद्र सरकारी कर्मचाऱ्यांसाठी वेतन आयोग",
      description: "केंद्र सरकारच्या कर्मचाऱ्यांना समान वेतन आयोगाचे लाभ देण्यासाठी पाठपुरावा",
      icon: Coins,
      category: "कल्याण"
    },
    {
      year: "१९९५",
      title: "भारताचा वैद्यकीय विकास ठराव",
      description: "भारताच्या आरोग्य सुविधा आणि वैद्यकीय शिक्षण मजबूत करण्यासाठी ऐतिहासिक ठराव",
      icon: Stethoscope,
      category: "आरोग्य"
    },
    {
      year: "१९९६",
      title: "अंधश्रद्धा निर्मूलन कायदा",
      description: "अंधश्रद्धेविरुद्ध लढा देऊन वैज्ञानिक दृष्टिकोन वाढवण्यासाठी ऐतिहासिक ठराव पारित",
      icon: Sparkles,
      category: "समाज सुधारणा"
    },
    {
      year: "—",
      title: "शिक्षकांसाठी ५ वा वेतन आयोग",
      description: "महाराष्ट्रातील सर्व शिक्षकांना ५ व्या वेतन आयोगाप्रमाणे वेतन मिळवून दिले",
      icon: Scale,
      category: "शिक्षण"
    },
    {
      year: "—",
      title: "MBBS व MD जागांचे वाटप",
      description: "पात्र विद्यार्थ्यांसाठी भारतात आणि विदेशात वैद्यकीय जागांचे न्याय्य वाटप",
      icon: GraduationCap,
      category: "आरोग्य"
    },
    {
      year: "—",
      title: "मराठवाडा व विदर्भ शिक्षण",
      description: "मागास मराठवाडा आणि विदर्भ प्रदेशातील शिक्षणाचा दर्जा उंचावण्यासाठी महत्त्वपूर्ण योगदान",
      icon: Target,
      category: "शिक्षण"
    },
    {
      year: "—",
      title: "आमदारांसाठी स्थानिक विकास निधी",
      description: "विधान परिषद आमदारांसाठी स्थानिक विकास निधी मंजूर करण्यात यश",
      icon: Landmark,
      category: "प्रशासन"
    },
    {
      year: "—",
      title: "शेतमजुरांचे वेतन तीन पट वाढ",
      description: "महाराष्ट्रातील शेतमजुरांचे वेतन तीन पट वाढवण्यासाठी संघर्ष करून यश मिळवले",
      icon: HandHeart,
      category: "कल्याण"
    },
    {
      year: "—",
      title: "शिक्षक निवडणूक धोरण सुधारणा",
      description: "शिक्षक निवडणूक प्रक्रियेत पारदर्शकतेसाठी परिवर्तनकारी धोरण बदल",
      icon: Vote,
      category: "शिक्षण"
    }
  ];

  return (
    <>
      <Navbar />
      <div className={`min-h-screen w-full relative overflow-hidden bg-[#FAF9F6] ${berkshireSwash.variable} ${playfairDisplay.variable}`}>
        {/* Main content */}
        <div className={`relative z-10 max-w-7xl mx-auto px-6 pt-0 pb-20 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          
          {/* Language Toggle */}
          <div className="flex justify-end mb-6 pt-4">
            <button
              onClick={() => setIsMarathi(!isMarathi)}
              className="flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: isMarathi ? '#A68229' : 'rgba(166,130,41,0.1)',
                color: isMarathi ? 'white' : '#A68229',
                border: '2px solid #A68229',
              }}
            >
              <Languages className="w-5 h-5" />
              <span className="font-medium">{isMarathi ? 'English' : 'मराठी'}</span>
            </button>
          </div>

          {/* Header section */}
          <div className="text-center mb-16">
            <span className="text-xl tracking-[0.3em] uppercase font-semibold" style={{ color: '#A68229' }}>
              {isMarathi ? 'स्मृती दिन' : 'IN MEMORIAM'}
            </span>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mt-4 text-gray-900 ${isMarathi ? marathiFont.className : berkshireSwash.className}`}>
              {isMarathi ? 'पी. जी. दस्तुरकर सर' : 'P. G. Dastoorkar Sir'}
            </h1>
            <p className={`text-lg text-gray-600 mt-4 ${isMarathi ? marathiFont.className : ''}`} style={{ fontFamily: isMarathi ? 'var(--font-marathi)' : 'var(--font-playfair)' }}>
              {isMarathi ? 'शिक्षक आमदार, महाराष्ट्र विधान परिषद (१९९२–१९९६)' : 'Teacher-MLC, Maharashtra Legislative Council (1992–1996)'}
            </p>
            <div className="w-48 h-px bg-linear-to-r from-transparent via-amber-600 to-transparent mx-auto mt-6" />
          </div>

          {/* Main Profile/Intro Section */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16 mb-20">
            
            {/* Photo with Circular Frame */}
            <div className={`flex-shrink-0 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}>
              <div className="relative flex flex-col items-center">
                {/* Circular photo frame */}
                <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 shadow-2xl" style={{ borderColor: '#A68229' }}>
                  <Image
                    src="/PGDastoorkar Sir - Copy.png"
                    alt={isMarathi ? "पी. जी. दस्तुरकर सर" : "P. G. Dastoorkar Sir"}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                
                {/* Birth - Death Years */}
                <div className="mt-4 text-center">
                  <p className={`text-xl font-semibold ${isMarathi ? marathiFont.className : ''}`} style={{ fontFamily: isMarathi ? 'var(--font-marathi)' : 'var(--font-playfair)', color: '#A68229' }}>
                    {isMarathi ? '(१९४२ – २०१०)' : '(1942 – 2010)'}
                  </p>
                  
                </div>
              </div>
            </div>

            {/* Content section */}
            <div className={`flex-1 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
              
              <div className={`space-y-6 text-gray-700 leading-relaxed text-lg ${isMarathi ? marathiFont.className : ''}`} style={{ fontFamily: isMarathi ? 'var(--font-marathi)' : 'var(--font-playfair)' }}>
                {isMarathi ? (
                  <>
                    <p>
                      सन १९९२ ते १९९६ या सहा वर्षांच्या कालावधीत पी. जी. दस्तुरकर सर शिक्षक आमदार म्हणून विधान परिषदेमध्ये कार्यरत होते. या काळात त्यांनी शिक्षक, शिक्षण आणि शाळांना न्याय मिळवून देण्यासाठी महाराष्ट्र सरकारला अनेक वेळा धारेवर धरून मोठा लढा दिला.
                    </p>
                    <p>
                      त्यांनी केंद्र सरकारच्या शिक्षकाप्रमाणे पाचवा वेतन आयोग महाराष्ट्रातील शिक्षकांनाही लागू करावा, यासाठी विशेष प्रयत्न केले. विधान भवनातील वाचनालयात विस्तृत वाचन करून, टिपणे काढून प्रश्नांची अभ्यासपूर्ण मांडणी करत असत.
                    </p>
                    <p>
                      नांदेडमधील मिट्टीका शेर गल्लीत "मोईन भाई" यांच्या घरी राहात, तेथून चळवळ चालवली म्हणून लोक त्यांना <strong>"अस्सल मातीतला शेर"</strong> म्हणत असत. मार्क्सवादी विचारांनी प्रेरित असल्यामुळे त्यांच्या चळवळीला वेगळी धार होती.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      During his tenure (1992–1996) as Teacher-MLC in the Maharashtra Legislative Council, P. G. Dastoorkar Sir consistently fought for justice for teachers, education, and schools. He repeatedly held the government accountable and raised crucial issues in the House.
                    </p>
                    <p>
                      He made extensive efforts to implement the Fifth Pay Commission for Maharashtra teachers, on par with Central Government teachers. He would study deeply in the Legislature Library, take detailed notes, and present well-researched questions with conviction.
                    </p>
                    <p>
                      While staying in Muttika Sher Galli, Nanded, at the residence of "Moin Bhai," he carried out movement activities. Locals affectionately called him <strong>"The Real Lion of the Soil."</strong> He was also influenced by Marxist ideology, which gave a distinctive sharpness to the teachers' and education movements.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Memorial Info Banner */}
          {/* <div className={`mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            <div className="relative p-8 rounded-3xl" style={{
              background: `linear-gradient(135deg, 
                rgba(166,130,41,0.1) 0%, 
                rgba(166,130,41,0.05) 50%,
                rgba(255,255,255,0.8) 100%)`,
              border: '1.5px solid rgba(166,130,41,0.2)',
            }}>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
                <Calendar className="w-12 h-12" style={{ color: '#A68229' }} />
                <div>
                  <p className={`text-2xl font-bold text-gray-900 ${isMarathi ? marathiFont.className : ''}`} style={{ fontFamily: isMarathi ? 'var(--font-marathi)' : 'var(--font-playfair)' }}>
                    {isMarathi ? '१५ वे स्मरण दिन – २७ एप्रिल २०२५' : '15th Memorial Day – 27 April 2025'}
                  </p>
                  <p className={`text-gray-600 flex items-center justify-center md:justify-start gap-2 mt-1 ${isMarathi ? marathiFont.className : ''}`}>
                    <MapPin className="w-4 h-4" /> {isMarathi ? 'बाणेर, पुणे' : 'Baner, Pune'}
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          {/* Introduction Section */}
          <div className={`mb-20 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            <div className="relative">
              <Quote className="absolute -top-4 -left-4 w-12 h-12 opacity-20" style={{ color: '#A68229' }} />
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-amber-100">
                <p className={`text-xl md:text-2xl text-gray-700 leading-relaxed italic ${isMarathi ? marathiFont.className : ''}`} style={{ fontFamily: isMarathi ? 'var(--font-marathi)' : 'var(--font-playfair)' }}>
                  {isMarathi 
                    ? 'सन १९९२ ते १९९६ या सहा वर्षांच्या कालावधीत पी. जी. दस्तुरकर सर शिक्षक आमदार म्हणून विधान परिषदेमध्ये कार्यरत होते. या काळात त्यांनी शिक्षक, शिक्षण आणि शाळांना न्याय मिळवून देण्यासाठी महाराष्ट्र सरकारला अनेक वेळा धारेवर धरून मोठा लढा दिला.'
                    : 'During his tenure as Teacher-MLC in the Maharashtra Legislative Council, P. G. Dastoorkar Sir consistently fought for justice for teachers, education, and schools. He repeatedly held the government accountable and raised crucial issues in the House.'
                  }
                </p>
                <div className="mt-6 text-right">
                  <p className={`text-gray-600 font-medium ${isMarathi ? marathiFont.className : ''}`}>
                    {isMarathi ? '— प्रा. सुभाष दिगंबर दगडे' : '— Prof. Subhash Digambar Dagade'}
                  </p>
                  <p className={`text-gray-500 text-sm ${isMarathi ? marathiFont.className : ''}`}>
                    {isMarathi ? 'कासार मिशन प्रशासन, सातारा' : 'Kasar Mission Administration, Satara'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Achievement Stats */}
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {(isMarathi ? achievementsMr : achievements).map((stat, i) => (
                <div
                  key={i}
                  className={`group relative cursor-default transition-all duration-500 h-full ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{
                    transitionDelay: `${400 + i * 100}ms`
                  }}
                >
                  {/* Card with lighter dark background and shadow */}
                  <div 
                    className="relative h-full min-h-60 rounded-2xl transition-all duration-500 group-hover:-translate-y-3 flex flex-col p-7"
                    style={{
                      background: 'linear-gradient(165deg, #3D3426 0%, #2F2920 50%, #252017 100%)',
                      boxShadow: `
                        0 10px 40px -10px rgba(0, 0, 0, 0.4),
                        0 20px 50px -15px rgba(166, 130, 41, 0.12),
                        0 4px 6px -2px rgba(0, 0, 0, 0.25)
                      `
                    }}
                  >
                    {/* Hover shadow enhancement */}
                    <div 
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        boxShadow: `
                          0 25px 60px -15px rgba(0, 0, 0, 0.5),
                          0 35px 70px -20px rgba(181, 145, 54, 0.2),
                          0 0 40px -10px rgba(181, 145, 54, 0.15)
                        `
                      }}
                    />
                    
                    {/* Subtle inner glow at top */}
                    <div 
                      className="absolute top-0 left-0 right-0 h-32 rounded-t-2xl opacity-40 pointer-events-none"
                      style={{
                        background: 'linear-gradient(180deg, rgba(181, 145, 54, 0.1) 0%, transparent 100%)'
                      }}
                    />
                    
                    {/* Content */}
                    <div className="relative z-10 flex flex-col h-full">
                      {/* Icon */}
                      <div 
                        className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110"
                        style={{ 
                          background: 'linear-gradient(135deg, #B59136 0%, #96762A 100%)',
                          boxShadow: '0 8px 20px -4px rgba(181, 145, 54, 0.45)'
                        }}
                      >
                        {i === 0 && <Landmark className="w-7 h-7 text-white" />}
                        {i === 1 && <Trophy className="w-7 h-7 text-white" />}
                        {i === 2 && <Scale className="w-7 h-7 text-white" />}
                        {i === 3 && <Shield className="w-7 h-7 text-white" />}
                      </div>
                      
                      {/* Title */}
                      <h3 
                        className={`font-bold text-xl mb-3 leading-tight ${isMarathi ? marathiFont.className : ''}`} 
                        style={{
                          fontFamily: isMarathi ? 'var(--font-marathi)' : 'var(--font-playfair)',
                          color: '#C9A83A'
                        }}
                      >
                        {stat.title}
                      </h3>
                      
                      {/* Subtitle */}
                      <p className={`text-gray-300 text-sm leading-relaxed grow ${isMarathi ? marathiFont.className : ''}`}>
                        {stat.subtitle}
                      </p>
                      
                      {/* Bottom accent line */}
                      <div 
                        className="h-0.5 w-10 mt-4 rounded-full transition-all duration-500 group-hover:w-16"
                        style={{ background: '#B59136' }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fifth Pay Commission Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <span className={`text-xl tracking-[0.3em] uppercase font-semibold ${isMarathi ? marathiFont.className : ''}`} style={{ color: '#A68229' }}>
                {isMarathi ? '⚖️ पाचवा वेतन आयोग' : '⚖️ FIFTH PAY COMMISSION'}
              </span>
              <h2 className={`text-3xl md:text-4xl font-bold mt-4 text-gray-900 ${isMarathi ? marathiFont.className : ''}`} style={{ fontFamily: isMarathi ? 'var(--font-marathi)' : 'var(--font-playfair)' }}>
                {isMarathi ? 'एक ऐतिहासिक यश' : 'A Landmark Achievement'}
              </h2>
              <div className="w-48 h-px bg-linear-to-r from-transparent via-amber-600 to-transparent mx-auto mt-4" />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className={`transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}>
                <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-amber-100 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <Landmark className="w-10 h-10" style={{ color: '#A68229' }} />
                    <h3 className={`text-2xl font-bold text-gray-900 ${isMarathi ? marathiFont.className : ''}`} style={{ fontFamily: isMarathi ? 'var(--font-marathi)' : 'var(--font-playfair)' }}>
                      {isMarathi ? 'संघर्ष' : 'The Struggle'}
                    </h3>
                  </div>
                  <div className={`space-y-4 text-gray-700 ${isMarathi ? marathiFont.className : ''}`} style={{ fontFamily: isMarathi ? 'var(--font-marathi)' : 'system-ui, sans-serif' }}>
                    {isMarathi ? (
                      <>
                        <p>भारतीय जनता पक्ष–शिवसेना सरकारच्या काळात पाचवा वेतन आयोग हा मोठा प्रश्न बनला. महाराष्ट्र शिक्षक मंडळ आणि पी. जी. दस्तुरकर सरांनी त्याच्या अंमलबजावणीसाठी महत्त्वाची चळवळ चालवली.</p>
                        <p>शिक्षण मंत्री <strong>सुधीरभाऊ जोशी</strong> आणि गृहमंत्री <strong>गोपीनाथराव मुंडे</strong> यांच्या अध्यक्षतेखाली झालेल्या <strong>३.३० तासांच्या बैठकीत</strong></p>
                        <p><strong>र. ग. कर्णिक सर</strong> आणि <strong>पी. जी. दस्तुरकर सर</strong> यांनी प्रभावी मांडणी केली. त्यामुळे महाराष्ट्रातील शिक्षकांना पाचवा वेतन आयोग लागू करण्यात यश मिळाले.</p>
                      </>
                    ) : (
                      <>
                        <p>During the BJP–Shiv Sena government era, the Fifth Pay Commission was one of the most prominent issues. P. G. Dastoorkar Sir, along with Maharashtra Shikshak Mandal, led a strong movement demanding its implementation.</p>
                        <p>A crucial <strong>3.5-hour meeting</strong> took place under the chairmanship of Education Minister <strong>Sudhirbhau Joshi</strong> and Home Minister <strong>Gopinathrao Munde</strong>.</p>
                        <p><strong>R. G. Karnik</strong> and <strong>P. G. Dastoorkar</strong> argued firmly and convincingly for the teachers, resulting in the successful implementation of the Fifth Pay Commission for Maharashtra teachers, on par with Central Government teachers.</p>
                      </>
                    )}
                  </div>
                </div>
              </div>
              
              <div className={`transition-all duration-1000 delay-600 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}>
                <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-amber-100 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <Scale className="w-10 h-10" style={{ color: '#A68229' }} />
                    <h3 className={`text-2xl font-bold text-gray-900 ${isMarathi ? marathiFont.className : ''}`} style={{ fontFamily: isMarathi ? 'var(--font-marathi)' : 'var(--font-playfair)' }}>
                      {isMarathi ? 'ऐतिहासिक वेतनवाढ' : 'Historical Salary Increases'}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {(isMarathi ? payCommissionHistoryMr : payCommissionHistory).map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-amber-50/50 border border-amber-100">
                        <div className={isMarathi ? marathiFont.className : ''}>
                          <span className="font-bold text-gray-900">{item.year}</span>
                          <span className="text-gray-600 text-sm ml-2">({item.commission})</span>
                        </div>
                        <span className="font-bold text-lg" style={{ color: '#A68229' }}>{item.increase}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contract Teacher System Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <span className={`text-xl tracking-[0.3em] uppercase font-semibold ${isMarathi ? marathiFont.className : ''}`} style={{ color: '#A68229' }}>
                {isMarathi ? '🏆 कंत्राटी शिक्षक पद रद्द' : '🏆 ABOLISHING CONTRACT TEACHER SYSTEM'}
              </span>
              <h2 className={`text-3xl md:text-4xl font-bold mt-4 text-gray-900 ${isMarathi ? marathiFont.className : ''}`} style={{ fontFamily: isMarathi ? 'var(--font-marathi)' : 'var(--font-playfair)' }}>
                {isMarathi ? 'शिक्षकांसाठी एक मोठा विजय' : 'A Victory for Teachers'}
              </h2>
              <div className="w-48 h-px bg-linear-to-r from-transparent via-amber-600 to-transparent mx-auto mt-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {(isMarathi ? beliefsMr : beliefs).map((belief, i) => (
                <div
                  key={i}
                  className={`flex gap-6 items-start p-6 rounded-2xl bg-white/40 backdrop-blur-sm border border-amber-100 transition-all duration-700 hover:shadow-lg hover:-translate-y-1 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${700 + i * 100}ms` }}
                >
                  <div className="shrink-0 w-16 h-16 rounded-2xl bg-linear-to-br from-amber-50 to-amber-100 flex items-center justify-center">
                    <belief.icon className="w-8 h-8" style={{ color: '#A68229' }} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold mb-2 ${isMarathi ? marathiFont.className : ''}`} style={{ color: '#A68229', fontFamily: isMarathi ? 'var(--font-marathi)' : 'var(--font-playfair)' }}>
                      {belief.title}
                    </h3>
                    <p className={`text-gray-600 leading-relaxed ${isMarathi ? marathiFont.className : ''}`} style={{ fontFamily: isMarathi ? 'var(--font-marathi)' : 'system-ui, sans-serif' }}>
                      {belief.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className={`mt-8 p-6 rounded-2xl border-l-4 transition-all duration-1000 delay-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`} style={{ borderColor: '#A68229', backgroundColor: 'rgba(166,130,41,0.05)' }}>
              <p className={`text-lg text-gray-700 italic ${isMarathi ? marathiFont.className : ''}`} style={{ fontFamily: isMarathi ? 'var(--font-marathi)' : 'var(--font-playfair)' }}>
                {isMarathi 
                  ? 'र. ग. कर्णिक आणि पी. जी. दस्तुरकर यांच्या अभ्यासपूर्ण मांडणीमुळे कंत्राटी शिक्षक पद रद्द करण्यात आले — हे शिक्षक चळवळीचे मोठे यश होते.'
                  : 'Due to the strong and logical arguments presented by R. G. Karnik and P. G. Dastoorkar, the government abolished the contract-teacher post, marking a major victory for teachers across Maharashtra.'
                }
              </p>
            </div>
          </div>

          {/* Legislative Contributions */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <span className={`text-xl tracking-[0.3em] uppercase font-semibold ${isMarathi ? marathiFont.className : ''}`} style={{ color: '#A68229' }}>
                {isMarathi ? '📜 विधानपरिषदेतील योगदान' : '📜 LEGISLATIVE CONTRIBUTIONS'}
              </span>
              <h2 className={`text-3xl md:text-4xl font-bold mt-4 text-gray-900 ${isMarathi ? marathiFont.className : ''}`} style={{ fontFamily: isMarathi ? 'var(--font-marathi)' : 'var(--font-playfair)' }}>
                {isMarathi ? 'सुधारणा आणि यश' : 'Reforms & Achievements'}
              </h2>
              <div className="w-48 h-px bg-linear-to-r from-transparent via-amber-600 to-transparent mx-auto mt-4" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Key Reforms Card */}
              <div className={`transition-all duration-1000 delay-500 h-full ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}>
                <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-amber-100 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <FileText className="w-10 h-10" style={{ color: '#A68229' }} />
                    <h3 className={`text-2xl font-bold text-gray-900 ${isMarathi ? marathiFont.className : ''}`} style={{ fontFamily: isMarathi ? 'var(--font-marathi)' : 'var(--font-playfair)' }}>
                      {isMarathi ? 'महत्त्वाच्या सुधारणा' : 'Key Reforms'}
                    </h3>
                  </div>
                  <ul className={`space-y-4 grow ${isMarathi ? marathiFont.className : ''}`}>
                    <li className="flex items-start gap-3">
                      <Shield className="w-5 h-5 mt-1 shrink-0" style={{ color: '#A68229' }} />
                      <span className="text-gray-700">
                        {isMarathi ? <><strong>नोकरी सुरक्षितता</strong> — शिक्षकांच्या सेवाशाश्वतीसाठी अथक लढा</> : <>Fought relentlessly for <strong>job security</strong> for teachers</>}
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Shield className="w-5 h-5 mt-1 shrink-0" style={{ color: '#A68229' }} />
                      <span className="text-gray-700">
                        {isMarathi ? <><strong>बँक वेतन प्रणाली</strong> — थेट बँकेमार्फत वेतन वितरणाचा पुरस्कार</> : <>Pushed for <strong>bank salary disbursement</strong> system</>}
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Shield className="w-5 h-5 mt-1 shrink-0" style={{ color: '#A68229' }} />
                      <span className="text-gray-700">
                        {isMarathi ? <><strong>शिक्षण कायदा</strong> — शैक्षणिक सुधारणांसाठी कायदा सादर</> : <>Introduced the <strong>Education Act</strong></>}
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Shield className="w-5 h-5 mt-1 shrink-0" style={{ color: '#A68229' }} />
                      <span className="text-gray-700">
                        {isMarathi ? <><strong>वेतन सुधारणा समिती</strong> — द. म. सुकथनकर यांच्या अध्यक्षतेखाली सदस्य</> : <>Member of <strong>State Pay Revision Committee</strong> under D. M. Sukthankar</>}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Personal Qualities Card */}
              <div className={`transition-all duration-1000 delay-600 h-full ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}>
                <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-amber-100 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <Trophy className="w-10 h-10" style={{ color: '#A68229' }} />
                    <h3 className={`text-2xl font-bold text-gray-900 ${isMarathi ? marathiFont.className : ''}`} style={{ fontFamily: isMarathi ? 'var(--font-marathi)' : 'var(--font-playfair)' }}>
                      {isMarathi ? 'वैयक्तिक गुण' : 'Personal Qualities'}
                    </h3>
                  </div>
                  
                  {/* Qualities Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6 grow">
                    {(isMarathi ? qualitiesMr : qualities).map((quality, i) => (
                      <div
                        key={i}
                        className={`px-4 py-3 rounded-xl text-sm font-medium ${isMarathi ? marathiFont.className : ''}`}
                        style={{
                          backgroundColor: 'rgba(166,130,41,0.08)',
                          color: '#6B5A1E',
                          border: '1px solid rgba(166,130,41,0.15)'
                        }}
                      >
                        {quality}
                      </div>
                    ))}
                  </div>
                  
                  {/* Recognition Banner */}
                  <div 
                    className="p-5 rounded-2xl flex items-center gap-4"
                    style={{ 
                      background: 'linear-gradient(135deg, rgba(166,130,41,0.12) 0%, rgba(166,130,41,0.06) 100%)',
                      border: '1px solid rgba(166,130,41,0.2)'
                    }}
                  >
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: 'rgba(166,130,41,0.15)' }}
                    >
                      <Award className="w-6 h-6" style={{ color: '#A68229' }} />
                    </div>
                    <div className={`${isMarathi ? marathiFont.className : ''}`}>
                      <p className="text-sm text-gray-600 mb-0.5">
                        {isMarathi ? 'महाराष्ट्र शासनाने सन्मानित' : 'Honoured by Maharashtra Government'}
                      </p>
                      <p className="text-lg font-bold" style={{ color: '#A68229' }}>
                        {isMarathi ? 'उत्कृष्ट संसदपटू' : 'Outstanding Parliamentarian'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Jnanaprabodhini - Social Contributions Section */}
          <div className="mb-20">
            {/* Hero Banner for Jnanaprabodhini */}
            <div className={`relative mb-16 rounded-3xl overflow-hidden transition-all duration-1000 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}>
              <div 
                className="relative py-16 px-8"
                style={{
                  background: 'linear-gradient(135deg, #2D2A26 0%, #3D3426 50%, #4A4030 100%)',
                }}
              >
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                  <div className="absolute top-10 left-10 w-32 h-32 rounded-full" style={{ background: 'radial-gradient(circle, #A68229 0%, transparent 70%)' }} />
                  <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full" style={{ background: 'radial-gradient(circle, #A68229 0%, transparent 70%)' }} />
                </div>
                
                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-500" />
                    <Sparkles className="w-6 h-6" style={{ color: '#C9A83A' }} />
                    <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-500" />
                  </div>
                  <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isMarathi ? marathiFont.className : ''}`} style={{ color: '#C9A83A', fontFamily: isMarathi ? 'var(--font-marathi)' : 'var(--font-playfair)' }}>
                    {isMarathi ? 'ज्ञानप्रबोधिनी' : 'Jnanaprabodhini'}
                  </h2>
                  <p className={`text-xl text-gray-300 mb-2 ${isMarathi ? marathiFont.className : ''}`}>
                    {isMarathi ? 'सामाजिक कार्ये आणि योगदान' : 'Social Contributions & Legacy'}
                  </p>
                  <div className="flex items-center justify-center gap-2 mt-4">
                    <Calendar className="w-5 h-5 text-amber-400" />
                    <span className={`text-amber-200 ${isMarathi ? marathiFont.className : ''}`}>
                      {isMarathi ? '१२ मार्च १९९४ — २७ एप्रिल २०१०' : '12 March 1994 — 27 April 2010'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Scrolling Marquee of Contributions */}
            <div className="relative mb-12 overflow-hidden py-4">
              <div 
                className="flex gap-6 animate-scroll"
                style={{
                  animation: 'scroll 40s linear infinite',
                }}
              >
                {[...(isMarathi ? socialContributionsMr : socialContributions), ...(isMarathi ? socialContributionsMr : socialContributions)].map((contribution, i) => (
                  <div
                    key={i}
                    className="group shrink-0 w-80"
                  >
                    <div 
                      className="h-full p-6 rounded-2xl transition-all duration-300 hover:scale-105"
                      style={{
                        background: 'linear-gradient(145deg, #FFFFFF 0%, #FAF9F6 100%)',
                        border: '2px solid rgba(166,130,41,0.2)',
                        boxShadow: '0 8px 30px rgba(0,0,0,0.08)'
                      }}
                    >
                      <div className="flex items-start gap-4">
                        <div 
                          className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                          style={{
                            background: 'linear-gradient(135deg, #A68229 0%, #8B6914 100%)',
                            boxShadow: '0 4px 15px rgba(166,130,41,0.3)'
                          }}
                        >
                          <contribution.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className={`text-xs font-bold mb-1 ${isMarathi ? marathiFont.className : ''}`} style={{ color: '#A68229' }}>
                            {contribution.year !== '—' ? contribution.year : (isMarathi ? 'कायमस्वरूपी' : 'Ongoing')}
                          </div>
                          <h4 className={`font-bold text-gray-900 mb-1 leading-tight ${isMarathi ? marathiFont.className : ''}`} style={{ fontFamily: isMarathi ? 'var(--font-marathi)' : 'var(--font-playfair)' }}>
                            {contribution.title}
                          </h4>
                          <p className={`text-gray-600 text-sm line-clamp-2 ${isMarathi ? marathiFont.className : ''}`}>
                            {contribution.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Fade edges */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#FAF9F6] to-transparent pointer-events-none z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#FAF9F6] to-transparent pointer-events-none z-10" />
            </div>

            {/* Detailed Accordion-style Cards */}
            <div className="space-y-4">
              {(isMarathi ? socialContributionsMr : socialContributions).slice(0, 5).map((contribution, i) => (
                <div
                  key={i}
                  className={`group transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  }`}
                  style={{ transitionDelay: `${600 + i * 100}ms` }}
                >
                  <div 
                    className="relative flex flex-col md:flex-row items-stretch rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl"
                    style={{
                      background: '#FFFFFF',
                      border: '1px solid rgba(166,130,41,0.15)',
                    }}
                  >
                    {/* Left accent bar */}
                    <div 
                      className="w-full md:w-2 h-2 md:h-auto shrink-0"
                      style={{ background: 'linear-gradient(180deg, #A68229 0%, #8B6914 100%)' }}
                    />
                    
                    {/* Number indicator */}
                    <div className="hidden md:flex items-center justify-center w-20 shrink-0 bg-gradient-to-b from-amber-50 to-white">
                      <span className="text-4xl font-bold" style={{ color: 'rgba(166,130,41,0.2)' }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 p-6 flex flex-col md:flex-row items-start gap-4">
                      <div 
                        className="shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
                        style={{
                          background: 'linear-gradient(135deg, rgba(166,130,41,0.12) 0%, rgba(166,130,41,0.05) 100%)',
                          border: '1px solid rgba(166,130,41,0.15)'
                        }}
                      >
                        <contribution.icon className="w-7 h-7" style={{ color: '#A68229' }} />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <span 
                            className={`px-3 py-1 rounded-full text-xs font-bold ${isMarathi ? marathiFont.className : ''}`}
                            style={{ backgroundColor: 'rgba(166,130,41,0.1)', color: '#A68229' }}
                          >
                            {contribution.year !== '—' ? contribution.year : '✦'}
                          </span>
                          <span 
                            className={`px-3 py-1 rounded-full text-xs font-medium ${isMarathi ? marathiFont.className : ''}`}
                            style={{ backgroundColor: 'rgba(166,130,41,0.05)', color: '#6B5A1E', border: '1px solid rgba(166,130,41,0.1)' }}
                          >
                            {contribution.category}
                          </span>
                        </div>
                        <h3 
                          className={`text-xl font-bold mb-2 ${isMarathi ? marathiFont.className : ''}`}
                          style={{ fontFamily: isMarathi ? 'var(--font-marathi)' : 'var(--font-playfair)', color: '#2D2A26' }}
                        >
                          {contribution.title}
                        </h3>
                        <p className={`text-gray-600 leading-relaxed ${isMarathi ? marathiFont.className : ''}`}>
                          {contribution.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Remaining items in compact grid */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {(isMarathi ? socialContributionsMr : socialContributions).slice(5).map((contribution, i) => (
                <div
                  key={i}
                  className={`group transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${1000 + i * 80}ms` }}
                >
                  <div 
                    className="h-full p-5 rounded-xl text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    style={{
                      background: 'linear-gradient(145deg, rgba(166,130,41,0.08) 0%, rgba(166,130,41,0.02) 100%)',
                      border: '1px solid rgba(166,130,41,0.15)',
                    }}
                  >
                    <div 
                      className="w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
                      style={{ background: 'linear-gradient(135deg, #A68229 0%, #8B6914 100%)' }}
                    >
                      <contribution.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className={`font-bold text-sm leading-tight ${isMarathi ? marathiFont.className : ''}`} style={{ color: '#2D2A26', fontFamily: isMarathi ? 'var(--font-marathi)' : 'var(--font-playfair)' }}>
                      {contribution.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Badge */}
            <div className={`mt-12 flex justify-center transition-all duration-1000 delay-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <div 
                className="inline-flex items-center gap-4 px-8 py-4 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, #3D3426 0%, #2F2920 100%)',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.05)'
                }}
              >
                <Award className="w-8 h-8" style={{ color: '#C9A83A' }} />
                <div className="text-left">
                  <p className={`text-lg font-bold ${isMarathi ? marathiFont.className : ''}`} style={{ color: '#C9A83A', fontFamily: isMarathi ? 'var(--font-marathi)' : 'var(--font-playfair)' }}>
                    {isMarathi ? 'महाराष्ट्राचे लाडके शिक्षक आमदार' : 'Maharashtra\'s Beloved Teacher MLA'}
                  </p>
                  <p className={`text-sm text-gray-400 ${isMarathi ? marathiFont.className : ''}`}>
                    {isMarathi ? 'मा. पी. जी. दस्तुरकर — शिक्षक महासंघ नेते' : 'Hon. P. G. Dasturkar — Teacher Federation Leader'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CSS for scroll animation */}
          <style jsx>{`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-scroll {
              animation: scroll 40s linear infinite;
            }
            .animate-scroll:hover {
              animation-play-state: paused;
            }
          `}</style>

          {/* Guiding Principle */}
          <div className="mb-20">
            <div className={`relative p-12 rounded-3xl text-center transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`} style={{
              background: `linear-gradient(135deg, 
                rgba(166,130,41,0.15) 0%, 
                rgba(166,130,41,0.08) 50%,
                rgba(255,255,255,0.9) 100%)`,
              border: '2px solid rgba(166,130,41,0.3)',
            }}>
              <Quote className="w-16 h-16 mx-auto mb-6 opacity-30" style={{ color: '#A68229' }} />
              <blockquote className={`text-2xl md:text-3xl font-bold text-gray-900 leading-relaxed ${isMarathi ? marathiFont.className : ''}`} style={{ fontFamily: isMarathi ? 'var(--font-marathi)' : 'var(--font-playfair)' }}>
                {isMarathi 
                  ? '"भयमुक्त शिक्षक, भ्रष्टाचारमुक्त गुणात्मक शिक्षण, कर्तव्याचे अनुपालन आणि टक्क्यासाठी संघर्ष"'
                  : '"Fearless teachers, corruption-free quality education, duty compliance, and rightful struggle."'
                }
              </blockquote>
              <p className={`mt-6 text-gray-600 text-lg ${isMarathi ? marathiFont.className : ''}`}>
                {isMarathi ? '— पी. जी. दस्तुरकर सरांचा घोष' : '— P. G. Dastoorkar Sir\'s Guiding Principles'}
              </p>
            </div>
          </div>

          {/* Supporters Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <span className={`text-xl tracking-[0.3em] uppercase font-semibold ${isMarathi ? marathiFont.className : ''}`} style={{ color: '#A68229' }}>
                {isMarathi ? '🤝 सहकार्‍यांची साथ' : '🤝 COMRADES IN THE STRUGGLE'}
              </span>
              <h2 className={`text-3xl md:text-4xl font-bold mt-4 text-gray-900 ${isMarathi ? marathiFont.className : ''}`} style={{ fontFamily: isMarathi ? 'var(--font-marathi)' : 'var(--font-playfair)' }}>
                {isMarathi ? 'सहकार्‍यांची आणि नेत्यांची साथ' : 'Support from Colleagues & Leaders'}
              </h2>
              <div className="w-48 h-px bg-linear-to-r from-transparent via-amber-600 to-transparent mx-auto mt-4" />
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {(isMarathi ? supportersMr : supporters).map((name, i) => (
                <span
                  key={i}
                  className={`px-5 py-3 rounded-xl text-gray-700 font-medium transition-all duration-500 hover:scale-105 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  } ${isMarathi ? marathiFont.className : ''}`}
                  style={{
                    transitionDelay: `${800 + i * 50}ms`,
                    backgroundColor: 'rgba(255,255,255,0.7)',
                    border: '1px solid rgba(166,130,41,0.2)',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
                  }}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>

          {/* Author Attribution */}
          <div className={`text-center transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="inline-block p-8 rounded-3xl bg-white/60 backdrop-blur-sm border border-amber-100">
              <p className={`text-gray-600 text-sm uppercase tracking-widest mb-2 ${isMarathi ? marathiFont.className : ''}`}>
                {isMarathi ? 'लेखक' : 'Written by'}
              </p>
              <h3 className={`text-2xl font-bold text-gray-900 ${isMarathi ? marathiFont.className : ''}`} style={{ fontFamily: isMarathi ? 'var(--font-marathi)' : 'var(--font-playfair)' }}>
                {isMarathi ? 'डॉ. सुभाष दगडे' : 'Dr. Subhash Dagade'}
              </h3>
              <p className={`text-gray-600 mt-2 ${isMarathi ? marathiFont.className : ''}`}>
                {isMarathi ? 'कासार मिशन प्रशासन, सातारा' : 'Kasar Mission Administration, Satara'}
              </p>
              <p className={`text-gray-500 text-sm mt-1 ${isMarathi ? marathiFont.className : ''}`}>
                {isMarathi ? 'मो. ९८५००७६३८७' : 'Contact: 9850076387'}
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}