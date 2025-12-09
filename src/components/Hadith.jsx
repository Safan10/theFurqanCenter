import quran from "../assets/quran.jpeg";
import holdq from "../assets/holdq.jpeg";

export default function Hadith(){
  return(
    <>
      {/* IMAGE BEFORE HADITH */}
      <img 
        src={holdq}
        alt="Holding Quran"
        className="hadith-top-image"
      />

      {/* HADITH BOX */}
      <div className="hadith hadith-row">

        {/* TEXT SIDE */}
        <div>
          <p className="arabic">
            خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ
          </p>

          <p>
            The Prophet ﷺ said:<br/>
            <b>"The best among you are those who learn the Qur'an and teach it."</b>
          </p>

          <small>[Sahih al-Bukhari 5027]</small>
        </div>

        {/* QURAN ICON */}
        <img 
          src={quran}
          alt="Quran"
          className="quran-icon"
        />

      </div>
    </>
  );
}
