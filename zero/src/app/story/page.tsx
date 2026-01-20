import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '../components/AnimatedSection';

export default function Story() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-20">
        <Link
          href="/"
          className="inline-block mb-8 text-zinc-600 hover:text-zinc-900 transition-colors"
        >
          ← Kembali
        </Link>

        <h1 className="text-3xl md:text-5xl font-light mb-10 md:mb-12 text-zinc-900">
          Story
        </h1>

        {/* Introduction */}
        <section className="prose prose-base md:prose-lg max-w-none mb-12 md:mb-16">
          <p className="text-zinc-700 leading-relaxed">
            Zero Two adalah salah satu karakter anime paling ikonik dan kompleks yang pernah muncul dalam dunia anime modern, khususnya setelah kemunculannya dalam seri <strong className="font-medium text-zinc-900">Darling in the Franxx</strong> yang tayang pada tahun 2018. Ia bukan hanya karakter utama wanita, tetapi juga simbol dari tema besar cerita: identitas, keterasingan, cinta, dan konflik antara kemanusiaan dan naluri.
          </p>
        </section>

        {/* Template function for sections */}
        {[
          {
            title: "Dunia Distopia",
            img: "/zerotwo-photos/zero-two-1.jpeg",
            link: "/story/dunia-distopia",
            text: `Zero Two hidup di dunia distopia masa depan di mana umat manusia bertahan hidup dengan mengorbankan kebebasan, emosi, dan hubungan alami. Dunia ini dipenuhi oleh struktur sosial kaku, di mana anak-anak diciptakan dan dibesarkan hanya untuk menjadi pilot robot tempur bernama Franxx, yang digunakan untuk melawan makhluk raksasa bernama Klaxosaur. Anak-anak ini tidak memiliki keluarga, tidak memiliki masa kecil normal, dan tidak memiliki masa depan selain bertarung sampai mati.`,
          },
          {
            title: "Bukan Manusia Seutuhnya",
            img: "/zerotwo-photos/Zero-two-2.jpeg",
            link: "/story/bukan-manusia-seutuhnya",
            text: `Zero Two bukan manusia sepenuhnya. Ia adalah hasil eksperimen antara manusia dan Klaxosaur Princess, menjadikannya makhluk hibrida. Tubuhnya terlihat seperti manusia perempuan remaja, tetapi ia memiliki tanduk merah kecil di kepala, mata hijau tajam, dan darah biru yang menandakan bahwa ia bukan manusia murni.`,
          },
          {
            title: "Masa Kecil yang Sepi",
            img: "/zerotwo-photos/zero-two-3.gif",
            link: "/story/masa-kecil-yang-sepi",
            text: `Pada masa kecilnya, Zero Two hidup dalam kesepian ekstrem. Ia tidak tahu apa itu kasih sayang. Ia hanya tahu bahwa dirinya berbeda dan dibenci. Semua ini berubah ketika ia bertemu dengan Hiro saat mereka masih sangat kecil. Untuk pertama kalinya, Zero Two merasa diperlakukan sebagai manusia.`,
            gif: true
          },
          {
            title: "Partner Killer",
            img: "/zerotwo-photos/zero-two-4.gif",
            link: "/story/partner-killer",
            text: `Zero Two memiliki kemampuan luar biasa dalam bertarung, tetapi siapa pun yang menjadi partnernya akan perlahan mati karena tubuhnya tidak mampu menahan sinkronisasi dengan darah Klaxosaur. Karena itu, ia dijuluki "Partner Killer."`,
            gif: true
          },
          {
            title: "Pertemuan Kembali",
            img: "/zerotwo-photos/zero-two-5.jpg",
            link: "/story/pertemuan-kembali",
            text: `Saat ia akhirnya bertemu kembali dengan Hiro, takdir kembali bergerak. Hiro adalah satu-satunya orang yang mampu bertahan sebagai partner Zero Two tanpa mati. Hubungan mereka bukan hanya romantis, tetapi eksistensial.`,
          },
          {
            title: "Kepribadian yang Kontras",
            img: "/zerotwo-photos/zero-two-6.jpg",
            link: "/story/kepribadian-yang-kontras",
            text: `Di permukaan, ia terlihat provokatif, liar, dan percaya diri. Namun di dalam dirinya, Zero Two adalah makhluk yang rapuh, penuh trauma, dan ketakutan ditinggalkan.`,
          },
          {
            title: "Konflik Identitas",
            img: "/zerotwo-photos/zero-two-7.gif",
            link: "/story/konflik-identitas",
            text: `Zero Two harus menghadapi kenyataan pahit bahwa dirinya tidak akan pernah menjadi manusia sepenuhnya. Ia berada di antara dua dunia dan tidak diterima sepenuhnya oleh keduanya.`,
            gif: true
          },
          {
            title: "Klimaks dan Transendensi",
            img: "/zerotwo-photos/zero-two-8.gif",
            link: "/story/klimaks-dan-transendensi",
            text: `Dalam klimaks cerita, Zero Two dan Hiro menyatu secara biologis dan emosional untuk mengendalikan senjata terakhir umat manusia. Mereka bertarung bukan lagi sebagai manusia atau monster, tetapi sebagai dua jiwa.`,
            gif: true
          },
          {
            title: "Warisan",
            img: "/zerotwo-photos/zero-two-3.gif",
            link: "/story/warisan",
            text: `Zero Two menjadi ikon budaya pop karena ia mewakili keinginan untuk diterima apa adanya, meskipun dunia menolak kita. Ia adalah simbol dari trauma, keterasingan, dan cinta yang melawan takdir.`,
            gif: true
          },
        ].map((section, index) => (
          <AnimatedSection
            key={index}
            className="border-t border-zinc-200 pt-12 md:pt-16 pb-12 md:pb-16"
          >
            <h2 className="text-2xl md:text-4xl font-light mb-6 md:mb-8 text-zinc-900">
              {section.title}
            </h2>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className={`flex-shrink-0 w-full md:w-auto ${index % 2 === 1 ? "md:order-2" : ""}`}>
                <Image
                  src={section.img}
                  alt="Zero Two"
                  width={400}
                  height={400}
                  className={`rounded-lg shadow-lg image-hover w-full md:w-[250px] h-auto ${
                    section.gif ? "animate-float" : ""
                  }`}
                  unoptimized={section.gif}
                />
              </div>

              <div className="prose prose-base md:prose-lg max-w-none flex-1">
                <p className="text-zinc-700 leading-relaxed mb-6">
                  {section.text}
                </p>

                <Link
                  href={section.link}
                  className="inline-block mt-2 px-5 md:px-6 py-2 bg-zinc-900 text-white rounded-lg button-hover"
                >
                  Rincian Lengkap →
                </Link>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
