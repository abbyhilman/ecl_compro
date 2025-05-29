"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Activity,
  ArrowRight,
  Award,
  Calendar,
  CheckCircle2,
  CircleUser,
  Factory,
  Globe2,
  Lightbulb,
  MapPin,
  Medal,
  Microscope,
  ShieldCheck,
  Users2,
} from "lucide-react";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-muted/80 to-background z-0">
          <div className="absolute inset-0 bg-[url('/images/logo_banner.png')] bg-cover bg-center opacity-10"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Tentang{" "}
              <span className="text-primary">PT. Emsada Cipta Lestari</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Penyedia layanan engineering terkemuka untuk pertambangan dan alat
              berat sejak 2013, berkomitmen pada kualitas dan keselamatan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                Tentang Perusahaan
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  PT. Emsada Cipta Lestari (ECL) didirikan pada tahun 2013 di
                  Jakarta dengan visi menjadi penyedia layanan engineering
                  terdepan di Indonesia. Kami fokus pada solusi untuk industri
                  pertambangan dan alat berat, menawarkan layanan seperti
                  fabrikasi, perbaikan unit, dan operasional yard.
                </p>
                <p>
                  Dengan lebih dari 150 karyawan dan tenaga ahli, ECL beroperasi
                  di empat lokasi strategis: Cakung, Somber, Gambut, dan
                  Rungkut. Kami mengutamakan keselamatan, inovasi, dan kepuasan
                  pelanggan, menjadikan kami mitra terpercaya bagi klien seperti
                  PT. Trakindo Utama dan PT. Hyundai.
                </p>
                <p>
                  Komitmen kami terhadap praktik berkelanjutan dan standar
                  kualitas tinggi telah menghasilkan sertifikasi internasional
                  dan pengakuan industri.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex gap-3 items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">ISO 9001:2015</h3>
                    <p className="text-sm text-muted-foreground">
                      Manajemen Kualitas
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">ISO 14001:2015</h3>
                    <p className="text-sm text-muted-foreground">
                      Manajemen Lingkungan
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">ISO 45001:2018</h3>
                    <p className="text-sm text-muted-foreground">
                      Keselamatan & Kesehatan Kerja
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">CSMS 4 Bintang</h3>
                    <p className="text-sm text-muted-foreground">
                      Dari PT. Trakindo Utama
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <AspectRatio ratio={4 / 3}>
                  <Image
                    src="/images/logo_name.png"
                    alt="Fasilitas PT. Emsada Cipta Lestari"
                    fill
                    className="object-cover"
                  />
                </AspectRatio>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Penghargaan Sertifikat
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Penghargaan atas dedikasi kami dalam menjaga standar kualitas,
              keselamatan, dan lingkungan
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto"
          >
            {[
              {
                title: "BPJS Ketenagakerjaan",
                description:
                  "Sertifikat kepesertaan yang menunjukkan komitmen terhadap perlindungan jaminan sosial pekerja.",
                image: "/images/img_sertifikat_satu.png",
              },
              {
                title: "BPJS Ketenagakerjaan",
                description:
                  "Sertifikat kepesertaan yang menunjukkan komitmen terhadap perlindungan jaminan sosial pekerja.",
                image: "/images/img_sertifikat_dua.png",
              },
              {
                title: "CSMS (Trakindo CAT)",
                description:
                  "Penilaian  dari PT. Trakindo Utama untuk manajemen keselamatan kontraktor.",
                image: "/images/img_sertifikat_tiga.png",
              },
              {
                title: "CSMS (Trakindo CAT)",
                description:
                  "Penilaian  dari PT. Trakindo Utama untuk manajemen keselamatan kontraktor.",
                image: "/images/img_sertifikat_empat.png",
              },
            ].map((cert, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="overflow-hidden h-full">
                  <div className="relative h-48">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-5">
                    <h3 className="text-xl font-semibold">{cert.title}</h3>
                    <p className="mt-3 text-muted-foreground text-sm">
                      {cert.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Misi, Visi & Nilai Kami
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Prinsip yang memandu kami dalam memberikan solusi engineering
              terbaik
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="bg-background rounded-lg p-6 shadow-sm border"
            >
              <div className="rounded-full bg-primary/10 p-3 w-fit mb-4 text-primary">
                <Lightbulb className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Misi Kami</h3>
              <p className="mt-3 text-muted-foreground">
                Menyediakan solusi engineering yang inovatif, aman, dan
                berkualitas tinggi untuk industri pertambangan dan alat berat,
                dengan fokus pada kepuasan pelanggan.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-background rounded-lg p-6 shadow-sm border"
            >
              <div className="rounded-full bg-primary/10 p-3 w-fit mb-4 text-primary">
                <Globe2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Visi Kami</h3>
              <p className="mt-3 text-muted-foreground">
                Menjadi penyedia layanan engineering terkemuka di Indonesia,
                diakui atas keselamatan, kualitas, dan keunggulan operasional.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-background rounded-lg p-6 shadow-sm border"
            >
              <div className="rounded-full bg-primary/10 p-3 w-fit mb-4 text-primary">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Nilai Kami</h3>
              <ul className="mt-3 space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Keselamatan di atas segalanya</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Kualitas tanpa kompromi</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Inovasi berkelanjutan</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Integritas dalam bisnis</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Kepuasan pelanggan</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our History */}
      <section className="py-12 md:py-16" id="history">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Perjalanan Kami</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Menelusuri sejarah PT. Emsada Cipta Lestari dari pendirian hingga
              saat ini
            </p>
          </motion.div>

          <div className="relative max-w-6xl mx-auto">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2"></div>

            <div className="space-y-12">
              {[
                {
                  year: "2013",
                  title: "Perusahaan Didirikan",
                  description:
                    "PT. Emsada Cipta Lestari didirikan oleh Edy Purwanto, fokus pada layanan pertambangan.",
                  image: "/images/image10.jpeg",
                },
                {
                  year: "2014",
                  title: "Ekspansi Layanan",
                  description:
                    "Memperluas layanan ke pemeliharaan alat berat dan fabrikasi untuk mendukung operasional klien.",
                  image: "/images/image11.jpeg",
                },
                {
                  year: "2016",
                  title: "Sertifikasi ISO",
                  description:
                    "Meraih sertifikasi ISO 9001:2015 dan ISO 14001:2015, menegaskan komitmen pada kualitas dan lingkungan.",
                  image: "/images/image12.jpeg",
                },
                {
                  year: "2018",
                  title: "CSMS & Ekspansi Yard",
                  description:
                    "Memperoleh CSMS 4 bintang dari PT. Trakindo Utama dan membuka yard di Somber dan Gambut.",
                  image: "/images/image13.jpeg",
                },
                {
                  year: "2020",
                  title: "Inovasi Fabrikasi",
                  description:
                    "Memperkenalkan layanan fabrikasi dan perbaikan berstandar internasional untuk klien global.",
                  image: "/images/image14.jpeg",
                },
                {
                  year: "Sekarang",
                  title: "Keunggulan Operasional",
                  description:
                    "Beroperasi di Cakung, Somber, Gambut, dan Rungkut dengan 150+ karyawan, melayani klien terkemuka.",
                  image: "/images/image15.jpeg",
                },
              ].map((milestone, index) => (
                <div key={index} className="relative">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex flex-col md:flex-row gap-8 ${
                      index % 2 === 1 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="md:w-1/2 flex justify-end md:justify-center items-start">
                      <div
                        className={`relative rounded-lg overflow-hidden shadow-md max-w-md ${
                          index % 2 === 1 ? "md:ml-auto" : "md:mr-auto"
                        }`}
                      >
                        <AspectRatio ratio={16 / 9}>
                          <Image
                            src={milestone.image}
                            alt={milestone.title}
                            fill
                            className="object-cover"
                          />
                        </AspectRatio>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                          <div className="p-4 text-white">
                            <div className="font-bold text-2xl">
                              {milestone.year}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="md:w-1/2 flex items-center">
                      <div
                        className={`max-w-md ${
                          index % 2 === 1 ? "md:mr-auto" : "md:ml-auto"
                        }`}
                      >
                        <h3 className="text-2xl font-semibold">
                          {milestone.title}
                        </h3>
                        <p className="mt-2 text-muted-foreground">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <div className="hidden md:block absolute left-1/2 top-1/4 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-12 md:py-16 bg-muted" id="team">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Tim Kepemimpinan Kami
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Kenali para profesional yang memimpin visi dan kesuksesan kami
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex justify-center max-w-6xl mx-auto"
          >
            {[
              {
                name: "Edy Purwanto",
                position: "Pendiri",
                image: "/images/img_pendiri.png",
                bio: "Pendiri ECL sejak 2013, Edy Purwanto memiliki visi untuk menghadirkan layanan engineering unggul di sektor pertambangan.",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="w-full max-w-md"
              >
                <Card className="overflow-hidden h-full shadow-sm">
                  <div className="relative h-64 sm:h-72">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-sm text-primary font-medium mt-0.5">
                      {member.position}
                    </p>
                    <p className="mt-3 text-muted-foreground text-sm">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16" id="faq">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Pertanyaan Umum</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Temukan jawaban atas pertanyaan umum tentang layanan engineering
              kami
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  question: "Industri apa yang dilayani ECL?",
                  description:
                    "Kami melayani industri pertambangan dan alat berat, menyediakan layanan seperti operator, fabrikasi, dan perbaikan unit.",
                },
                {
                  question: "Apakah ECL menyediakan layanan kustomisasi?",
                  description:
                    "Ya, kami menawarkan solusi kustom seperti fabrikasi bracket dan tangki air, dirancang sesuai kebutuhan klien.",
                },
                {
                  question: "Standar kualitas apa yang diikuti?",
                  description:
                    "Kami tersertifikasi ISO 9001:2015, ISO 14001:2015, ISO 45001:2018, dan CSMS 4 bintang, memastikan kualitas dan keselamatan.",
                },
                {
                  question: "Berapa kapasitas operasional ECL?",
                  description:
                    "Dengan 150+ karyawan dan 4 lokasi yard, kami menangani proyek skala besar untuk klien seperti PT. Trakindo Utama.",
                },
                {
                  question: "Apakah ECL menyediakan pemeliharaan unit?",
                  description:
                    "Ya, kami menawarkan pemeliharaan alat berat, termasuk perbaikan bodi, AC, dan pengelasan sesuai standar.",
                },
                {
                  question: "Bagaimana ECL menjaga keselamatan?",
                  description:
                    "Kami menerapkan standar ISO 45001:2018 dan CSMS, dengan pelatihan rutin dan kepatuhan pada SOP keselamatan.",
                },
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                Siap Bermitra dengan Kami?
              </h2>
              <p className="mt-4 text-lg opacity-90 max-w-2xl mx-auto">
                Hubungi tim kami untuk mendiskusikan kebutuhan engineering Anda
                di sektor pertambangan dan alat berat.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">
                    Hubungi Tim Kami
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 hover:bg-primary-foreground/10"
                  asChild
                >
                  <Link href="/products">Jelajahi Layanan Kami</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
