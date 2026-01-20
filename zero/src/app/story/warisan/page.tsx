import Link from 'next/link';
import PageNav from '../../components/PageNav';

export default function Warisan() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <Link
          href="/story"
          className="inline-block mb-8 text-zinc-600 hover:text-zinc-900 transition-colors"
        >
          ← Kembali
        </Link>

        <h1 className="text-4xl md:text-5xl font-light mb-8 text-zinc-900">
          Warisan
        </h1>

        <section className="prose prose-lg max-w-none leading-relaxed space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-900">
            Bagian 1: Keberanian dalam Kerapuhan
          </h2>

          <p>
            Daya tarik Zero Two yang abadi bukan terletak pada kesempurnaannya, 
            tetapi justru pada keretakannya yang nyata. Ia adalah mosaik dari 
            kontradiksi yang sangat manusiawi: kuat namun rapuh, angkuh namun 
            haus penerimaan, monster namun penuh kasih sayang.
          </p>

          <p>
            Penggemar tidak hanya melihat seorang gadis dengan desain yang menarik. 
            Mereka melihat cermin yang memantulkan bagian tersembunyi dari diri mereka 
            sendiri. Keinginannya untuk diterima apa adanya adalah tema universal yang 
            terus bergema di hati banyak orang. Di balik sikap dingin dan keberaniannya, 
            ada luka yang jujur, dan justru kejujuran itulah yang membuatnya terasa hidup.
          </p>
        </section>

        <section className="prose prose-lg max-w-none leading-relaxed space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-900">
            Bagian 2: Pemberontak yang Mempertanyakan Definisi
          </h2>

          <p>
            Zero Two menolak untuk dimasukkan ke dalam kotak apa pun. Dunia yang 
            diciptakan APE mendefinisikan manusia secara sempit: patuh, terkendali, 
            dan tanpa individualitas. Zero Two, dengan darah campurannya dan 
            kehendak bebasnya, menghancurkan definisi itu.
          </p>

          <p>
            Ia memaksa semua orang untuk bertanya: apa sebenarnya yang membuat 
            seseorang menjadi manusia? Apakah darah dan bentuk tubuh, ataukah 
            kemampuan untuk mencintai, merasakan sakit, dan memilih jalan hidupnya 
            sendiri? Kehadirannya adalah provokasi terhadap sistem yang menuntut 
            keseragaman, dan itulah yang membuatnya begitu relevan bahkan di luar cerita.
          </p>
        </section>

        <section className="prose prose-lg max-w-none leading-relaxed space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-900">
            Bagian 3: Cinta Sebagai Tindakan Perlawanan
          </h2>

          <p>
            Hubungan Zero Two dan Hiro bukan sekadar romansa. Itu adalah bentuk 
            perlawanan paling murni terhadap dunia yang ingin memisahkan mereka. 
            Cinta mereka berdiri menantang takdir, menolak sistem, dan melawan 
            masa depan yang telah ditentukan orang lain.
          </p>

          <p>
            Perjalanan cinta Zero Two berubah dari obsesi menjadi ketulusan. 
            Ia belajar bahwa mencintai bukan berarti memiliki, melainkan memahami 
            dan berkorban. Transformasi ini menjadikan kisahnya jauh lebih dalam 
            daripada sekadar kisah cinta biasa. Ia menunjukkan bahwa cinta sejati 
            mampu mengubah bahkan jiwa yang paling terluka sekalipun.
          </p>
        </section>

        <section className="prose prose-lg max-w-none leading-relaxed space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-900">
            Bagian 4: Simbol bagi yang Terasing
          </h2>

          <p>
            Banyak penggemar mengadopsi Zero Two sebagai simbol bagi mereka yang 
            merasa berbeda dan terasing. Ia menjadi representasi bagi orang-orang 
            yang pernah merasa tidak cukup, disalahpahami, atau terluka oleh dunia.
          </p>

          <p>
            Melalui dirinya, banyak orang menemukan validasi emosional. Ia membuktikan 
            bahwa kerapuhan bukanlah kelemahan, bahwa rasa sakit bisa diubah menjadi 
            kekuatan, dan bahwa setiap orang pantas dicintai meskipun merasa seperti 
            monster. Itulah sebabnya ia melampaui batas anime dan menjadi figur yang 
            benar-benar personal bagi banyak orang.
          </p>
        </section>

        <section className="prose prose-lg max-w-none leading-relaxed space-y-4">
          <h2 className="text-2xl font-semibold text-zinc-900">
            Bagian 5: Warisan Abadi
          </h2>

          <p>
            Zero Two tidak lagi hanya milik Darling in the Franxx. Ia telah berubah 
            menjadi arketipe budaya pop. Sebuah simbol tentang menemukan keindahan 
            dalam kerusakan, tentang menolak takdir, dan tentang memilih cinta 
            meskipun dunia tampak kejam.
          </p>

          <p>
            Warisannya adalah pengingat bahwa menjadi manusia bukan soal sempurna, 
            tetapi tentang terus berjuang, mencintai, dan memberi makna pada hidup. 
            Selama ada orang yang merasa terhubung dengannya, Zero Two akan terus hidup, 
            terbang bebas di ingatan para penggemarnya sebagai ide yang tak pernah padam.
          </p>
        </section>

      </div>
      <PageNav 
          prev="/story/klimaks-dan-transendensi"
          next="/story"
       />
    </div>
  );
}
