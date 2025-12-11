import Logo from "../components/Logo";
import Hadith from "../components/Hadith";
import { Link } from "react-router-dom";
import freePoster from "../assets/freeclass.jpeg";

export default function Home() {
  return (
    <>
      {/* MAIN PAGE */}
      <div className="page">
        <Logo />

        <h1 className="main-title">
          Online Qur'an, Arabic & Islamic Studies
        </h1>

        {/* STUDENT INFO */}
        <div className="stats">
          <h3>🌍 Trusted Worldwide</h3>
          <p>
            Teaching <b>100+ female students</b> of all ages from
            different countries around the world.
          </p>
        </div>

        <Hadith />

        {/* FREE CLASS POSTER 
<section className="poster-section">
  <h2 className="islamic-title">
    Free Online Class Updates
  </h2>

  <img
    src={freePoster}
    alt="Free Qur'an class poster update"
    className="poster-img"
  />
   <div className="poster-apply-btn">
    <Link to="/apply" className="btn-islamic">
      Apply Now
    </Link>
  </div>

 
</section>

*/}

        {/* COURSES */}
        <h2 className="islamic-title">Courses Offered</h2>

        <div className="course-grid">

          <div className="card-islamic">
            Tajweed-ul-Qur’an & Makharij with Tarjuma & Tafseer
          </div>

          <div className="card-islamic">
            Arabic Basics
          </div>

          <div className="card-islamic">
            Urdu Reading & Writing
          </div>

          <div className="card-islamic">
            Basic Masle Masaile
          </div>

          <div className="card-islamic">
            Daily Duas & Sunnahs
          </div>

          <div className="card-islamic">
            99 Names of Allah with Meanings
          </div>

          <div className="card-islamic">
            40 Hadith with Meanings
          </div>

          <div className="card-islamic">
            Para Number 30 – Hifz Surah
          </div>

          <div className="card-islamic">
            6 Points (Tabligh Process)
          </div>

          <div className="card-islamic">
            Prophet Stories & Islamic Knowledge
          </div>

        </div>

        <Link to="/apply" className="btn-islamic">
          Apply Now
        </Link>
      </div>

      {/* TESTIMONIALS SECTION */}
      <section className="testimonials">

        <h2 className="islamic-title">
          What Our Learners Say About Us
        </h2>

        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>
             Alhamdulillah I have learned Basic Tajweed from  furqan center

One of my friend share the link of the furqan center orgnaised by Sister bint e farooque.

I reside in Qatar and have joined the class from Qatar. The furqan center provided us flexible time so we can attend the class with ease.

Our ustadah (teacher) is very hard-working. She has immense talent and very polite towards student. I must suggest we all can join Quran class to Learn and understand Quran better.

May Allah bless sister for her effort. I am really very thankful of the furqan center for providing us an opportunity of understanding and learning basic Qaida of Quran with such hardworking tutor.

Jazakallah khair.

            </p>
            <span>- Aaisha Iqubal
, Qatar</span>
          </div>
          <div className="testimonial-card">
            <p>
              Asslamu Alaikum ji Alhamdulillah hamein the furqan center  classes se bht fayda huwa maine kabhi soxha hi nhi tha ke main kabhi quran ka tarjuma Sikh sakungi lkn Allah ke karam se aur maullima  ki mehnat se  Alhamdulillah bht Acche se samaz raha hai
Obht hi Asan tariqe se mujhe aur mere friends ko tarjuma sikha rahe hain Allah unhein jazaye khair dein Ameen.

            </p>
            <span>— Asma, Qatar</span>
          </div>

          <div className="testimonial-card">
            <p>
              I am very satisfied with my teacher and The furqan center technique I could trust her teaching and technique learning method efficient for me to new learn new thing in easy way.... He is calm and peace nature person he is the best for improve my knowledge and learning. Thank you for giving this opportunity to learn Qur'an and giving others knowledge of islam ✨

            </p>
            <span>— Nishat, Chattisgarh</span>
          </div>

          <div className="testimonial-card">
            <p>
             I heard about The furqan center through my mother, who has been attending the Tajweed-e-Quran classes, and it has truly been a wonderful experience for our family. Living in a remote area, we always felt limited when it came to proper Quranic education, but this program made it possible and easy for us to stay connected with quality learning.

The fee is very affordable, making it accessible for families like ours. The teacher is highly knowledgeable and teaches with clarity, patience, and effective methods that make learning both meaningful and enjoyable.

We are sincerely grateful for the guidance and support that The furqan center provides. It has brought a positive change in our home and strengthened our connection with the Quran.

Afifa Noor

            </p>
            <span>— Afifa, Jharkhand</span>
          </div>

          <div className="testimonial-card">
            <p>
              enrolled my daughters at The Furqan Center, and it has been a wonderful experience for our family. Their teacher is kind, supportive, and explains everything so clearly that my daughters enjoy every lesson.

The flexible timings and reasonable fees make it easy to stay consistent, even with our busy schedule. I’m truly grateful for the progress and confidence my daughters have gained.
            </p>
            <span>— Shabana, UAE</span>
          </div>

          <div className="testimonial-card">
            <p>
             Mera bacha last one year se talim hasil kar raha  The furqan center mea,  bohat achhi talim milti hai (dua, sunnah , Islamic stories,aur bhi bahat saari cheezen sikhaya jata hai Alhamdulillah aur  teacher bhi bohat achhe hai hamza ki teacher musaf hamza ko bohat achhi talim dete hai aur unka nature bhi bohat achha hai vo hamza ke sath as a friend tarah padhate hai to bache ko talim hasil karne maza ata hai  any time available hote koi bhi problem hoti hai to vo problem ka solution nikalte hai
Exam every week  lete hain jise bache ne kitni talim hasil ki uske bareme parents ko pata chalta hai
I am happy with teacher and institute
            </p>
            <span>— Musaf Humza, UK</span>
          </div>

          <div className="testimonial-card">
            <p>
              Last year i2 ka tajweed class from the furqan center and they explain it to me very well thank god whenever I had any doubts the explain it to me very well they also arrange the timing while keeping us in mind because I am a housewife thank god I and based on that they arrange the time for US and she is very good teacher and a very good person my experience was very good you guys should definitely try her class once earlier I used to just read the Quran and understood a few words but alhamdulillah after taking his class alhamdulillah now I understand a lot in reciting thank God and they also thought us some words separately which is very useful for understanding and deciding the Quran so I want to trying the furqan center  and the place where they arrange search a good class specially for housewife thank you .

            </p>
            <span>— Uzma, Qatar</span>
          </div>

          <div className="testimonial-card">
            <p>
              Assalamualekum 
I have joined the furqan center (arabic online classes)for my kids. 
I really appreciate n very thankful because they provide suitable time for kids and make them learn properly.
My children Aariz,Aairah and Aahana they learned basic Arabi and so many surahs,ayaats when we were in london as well as Hyderabad…..
Thank you the furqan center
            </p>
            <span>— Rana Afroz, London</span>
          </div>

          <div className="testimonial-card">
            <p>
              Assalamualaikum 

The lessons we have learned through the program are truly commendable and have brought us great joy. Studying from home has provided us with valuable knowledge and has refreshed our faith on emman. It has given us the opportunity to learn about Islam, and we pray to Allah that He grants you good health, well‑being, and continued blessings. Ameen 

I will make every effort to share this information with all the people in our neighborhood so that they too can benefit. We will continue to promote this initiative as much as possible and connect more people to it. Inshallah. Your efforts are highly appreciated, and we request that you keep up the good work.

Thank you.

            </p>
            <span>— Ghazala Nikhat, Jharkhand</span>
          </div>

          <div className="testimonial-card">
            <p>
             I’ve had such a great experience with the Takweed class at Furqan Center. My pronunciation has improved so much, and I’m able to read the Qur’an with better speed and confidence now. The teacher follows up consistently with all our work and makes sure we understand every detail properly. I’m really happy to be a part of this class and truly grateful for the progress I’ve made here.

            </p>
            <span>— Hifzah Fathima, Bengaluru</span>
          </div>

          <div className="testimonial-card">
            <p>
             I’m extremely happy with my son’s progress at Furqan Center. In a short time, he has learned his duas efficiently and remembers them for a longer duration because of the teacher's continuous revisions. He has also become well-versed in all his basics. I’m especially pleased he has started reading the Qur’an — his clarity and comfort while reading have improved so much.

The teacher follows up regularly with his work, guides him patiently, and makes sure he understands everything properly. I truly appreciate the effort and dedication given to each child. I’m very grateful to have enrolled him at Furqan Center, and I’m proud of how he is growing in his learning.

            </p>
            <span>— Mohammad Hamza, Bangalore</span>
          </div>
           <div className="testimonial-card">
            <p>
           My friend had recommended to me, The Furqan centre and it’s been a really good experience so far. The teacher is very knowledgeable and kind, explaining the Quran in an easy to understand language that makes it very interesting for me. She is very patient and is keen to help when needed.

            </p>
            <span>— Tabassum
, Chennai</span>
          </div>
          <div className="testimonial-card">
            <p>
          السلامُ عليكم و رحمةُ اللهِ و بركاتُهُ

Alhamdulillāh, me and my daughters have been studying at The Furqan Center for the past four years, and it has truly been a blessing for our home.

My youngest daughter, Aameena, has grown immensely under her Muʿallimah’s guidance — from learning proper Tajwīd rules to beautiful Sunnahs and daily practices. Her teacher has always been patient, gentle, and dedicated, and we are deeply grateful for the nurturing environment she created.

My other daughter, Ayesha, has benefitted in so many areas as well. She has learned Tafsīr, started her ḥifẓ, memorised Sunnahs, basic Dīnīyāt, Duʿās and so much more, alhamdulillāh. Her confidence and love for the Qur’an have increased day by day.

As for myself, I have completed 10 Surah Tafseer tarjuma alhumdulillah learned Sunnahs, daily Duʿās, basic Arabic, and many beneficial lessons that have brought me closer to understanding the Qur’ān. Bi’idhnillāh, the knowledge I gained here will continue to benefit my family.

Even though we reside in Qatar, The Furqan Center has provided flexible timings that made it easy and comfortable for us to attend consistently. Our Ustādhah is hardworking, sincere, and exceptionally polite with her students. Her passion for teaching reflects in every class.

I sincerely encourage others to join and experience the beauty of learning the Qur’an with proper understanding.

May Allah reward Sister Bint-e-Farooque and her team abundantly for their tireless efforts. We are truly thankful to The Furqan Center for giving us this opportunity to learn, grow, and stay connected to the Book of Allah.

JazakAllahu Khairan

            </p>
            <span>— Noor Fathima
, Qatar</span>
          </div>
          <div className="testimonial-card">
            <p>
          Alhamdulillāh, studying at The Furqan Center has been one of the most rewarding experiences for me. Over the years I’ve learned proper Tajwīd, Sunnahs, essential Dīnīyāt, daily Duʿās, and I am currently studying basic Arabic along with the Tafsīr of the 30th para.

The classes are organised beautifully and the timings are flexible, which has made it easy for me to stay consistent even with my studies. My Ustādhah teaches with so much patience and clarity that it naturally builds a love for understanding the Qur’an.

I am genuinely grateful to Sister Bint-e-Farooque for creating such a supportive environment for women to learn. May Allah place barakah in their efforts and allow many more students to benefit.

JazakAllahu Khairan


            </p>
            <span>— Rabia
, Qatar</span>
          </div>
          <div className="testimonial-card">
            <p>
          I had a wonderful experience learning the Qur’an with Furqan center, The class timings were very convenient, and she is truly an excellent teacher. She patiently cleared all my doubts and always provided clear explanations, even for the smallest questions. As a revert to Islam, I received so much guidance from her throughout my journey, and I’m extremely grateful for her support. She is honestly one of the best teachers I’ve ever had.

            </p>
            <span>— Mariyam
, Bengaluru</span>
          </div>
          <div className="testimonial-card">
            <p>
           Assalamu alaikum rahamtullhi …ji Alhamdulillha The Furqan center.ju class's ham late hain  Quran ka tarjuma ur tafseer sekh Rahe hain usse  hame bahat hi fayeda ho raha hai turjuma seeqhna bahuth mushkil samjhi thi  Magar baji lafz ba.lafz tarjuma sekhate hain❤️‍🩹 hame bahat Asaan Hua tafser ke sath hi sath bahat se acche baten batati  hain asan Tariqe se sajhte hain  Allah unkin mehnatun ko  qubool kare uska rewards de aameen summa Aameen.

            </p>
            <span>— Tahseenunnisa
, Karnataka</span>
          </div>
          <div className="testimonial-card">
            <p>
           As salaam u alay kum wr wb 
Main Syedah Noorul Nigar from Bihar (Purnea). Maine Al Furqan centre me tajweed ki class ki thi.
Alhamdulillah mera experience bahot achcha rha.Tajweed seekhne ka behtareen moqa mila Allah k Fazal se.Furqan centre se hmne ghar baithe aaram se online classes attend ki or Alhamdulillah hmari ustaz Ukhti Shub bahot hi politely hme tajweed ki class krayi.Ma Sha Allah...Allah unki mehnat qubool farmayen...aameen
            </p>
            <span>— Noorul Nigar
, Bihar</span>
          </div>
          <div className="testimonial-card">
            <p>
          Attending the Furqan Quran Classes has been a truly enriching experience. The sessions greatly helped me improve my Quran reading skills, making my learning journey both productive and rewarding.
In addition to Quran recitation, I also had the opportunity to learn the basics of the Arabic language.
The institute regularly offers Taleem classes, which serve as a valuable source of insight into Deen. 
Overall, Furqan Quran Classes are an excellent platform for anyone seeking to strengthen their Quranic skills, gain foundational Arabic knowledge, and grow spiritually. I highly recommend them to others who wish to embark on a similar journey of learning and self-improvement.
</p>
            <span>— Falak
, Jeddah</span>
          </div>
          <div className="testimonial-card">
            <p>
           As salaam wa Alaikum wa rahmathullahi wa barakatuhu ! Alhamdulillah v happy n satisfied with Furqan Centre teaching skill n knowledge,Allah swt grant this institute with khair n baraka n bless d teachers with good rewards....Aameen
In shaa Allah  🙌🏻🧕🏻💖🪄💝✨🤲🏻👩🏻‍🏫🧑🏻‍🏫🧕🏻💖✨🙌🏻</p>
            <span>— Sadiya
, Qatar</span>
          </div>
           <div className="testimonial-card">
            <p>
          Alhamdulillah, I have thoroughly enjoyed attending classes at Furqan Center for the past four years. Currently, I am taking a break due to my studies, but I plan to rejoin in the future to continue my journey of learning. My ustazah has been incredibly patient and polite, guiding me through various courses I enrolled in, including Tajweed, Arabic grammar basics, daily Sunnahs, and Duas. 

I would also like to highlight the wonderful efforts of Sister Bint-e-Farooq (my ustazah), who tirelessly teaches women and children, empowering them with knowledge of Deen. May Allah reward her for her dedication and commitment to spreading the knowledge of Deen. Ameen.

            </p>
            <span>— Qulsum
, Qatar</span>
          </div>
           <div className="testimonial-card">
            <p>
         Furqan Center's Quran class has been a game-changer for me. I've witnessed a significant boost in my recitation skills and understanding of the Quran. The teacher's passion and commitment to my development is truly inspiring, and I feel fortunate to be part of this community.


            </p>
            <span>— Iffath
, Jeddah</span>
          </div>
           <div className="testimonial-card">
            <p>
          I joined Furqan Center during a very busy phase of my life, and it has truly been one of the best decisions for my Arabic and Quran learning journey. With career responsibilities and a hectic routine, I never thought I would find a online program that fits so perfectly into my schedule.

The evening classes are a blessing — they allow me to learn comfortably at my own pace and at a time that suits me. The teacher at Furqan Center is incredibly knowledgeable and supportive. Their clear explanations, patience, and excellent teaching methods have helped me understand Arabic better and recite the Quran correctly.

I am genuinely grateful for the opportunity and guidance Furqan Center provides. It has made a remarkable difference in my learning and spiritual growth.

May Allah accept all our efforts and reward the entire team of Furqan Center for their dedication and service.

            </p>
            <span>— Showqhiya
, Bengaluru</span>
          </div>
        </div>
      </section>
    </>
  );
}
