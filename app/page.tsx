"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowRight, BarChart3, ChevronRight, Factory, Settings, Shield, PenTool, TrendingUp, Truck } from 'lucide-react'
import Image from 'next/image'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Separator } from '@/components/ui/separator'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-muted/80 to-background z-0">
          <div className="absolute inset-0 bg-[url('/images/logo_banner.png')] bg-cover bg-center opacity-10"></div>
        </div>
        <div className="container mx-auto px-6 sm:px-8 md:px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-center lg:text-left"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="text-primary">Solusi Engineering</span> Terpercaya
              </h1>
              <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0">
                PT Emsada Cipta Lestari, berdiri sejak 2013, menyediakan layanan engineering terbaik untuk pertambangan dan alat berat.
              </p>
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" asChild>
                  <Link href="/products">
                    Jelajahi Layanan Kami
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Hubungi Kami</Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <AspectRatio ratio={16/9}>
                  <Image 
                    src="/images/img_banner_dua.png" 
                    alt="Fasilitas engineering pertambangan" 
                    fill
                    className="object-cover"
                  />
                </AspectRatio>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-6 sm:px-8 md:px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Layanan & Solusi Kami</h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground">
              Solusi engineering komprehensif untuk mendukung kebutuhan pertambangan dan industri alat berat Anda
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 sm:mt-12 max-w-7xl mx-auto"
          >
            {[
              {
                icon: <Factory className="h-8 sm:h-10 w-8 sm:w-10" />,
                title: "Operator Bersertifikasi",
                description: "Operator berlisensi SIO dan Kimper dari PT Trakindo Utama, menangani unloading, inspeksi, dan reposisi unit dengan standar tinggi."
              },
              {
                icon: <Settings className="h-8 sm:h-10 w-8 sm:w-10" />,
                title: "Helper Profesional",
                description: "Helper terlatih untuk inspeksi, perakitan, preservasi, dan pemeliharaan unit sesuai SOP, mendukung operasional di yard."
              },
              {
                icon: <PenTool className="h-8 sm:h-10 w-8 sm:w-10" />,
                title: "Sektor Fabrikasi",
                description: "Fabrikasi inovatif untuk pertambangan dan alat berat, mengutamakan kualitas dan keselamatan kerja."
              },
              {
                icon: <BarChart3 className="h-8 sm:h-10 w-8 sm:w-10" />,
                title: "Body Repair",
                description: "Perbaikan bodi unit seperti 745, 777, dan D10T dengan standar internasional (Australia, Dubai, Mexico)."
              },
              {
                icon: <Shield className="h-8 sm:h-10 w-8 sm:w-10" />,
                title: "Administrasi & Pelaporan",
                description: "Pengelolaan data dan laporan harian, mingguan, hingga tahunan untuk transparansi dan efisiensi operasional."
              },
              {
                icon: <Truck className="h-8 sm:h-10 w-8 sm:w-10" />,
                title: "Logistik & Pengiriman",
                description: "Pengiriman barang dan suku cadang yang tepat waktu, mendukung kebutuhan pelanggan seperti PT Sanggar Sarana Baja."
              }
            ].map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-md transition-shadow overflow-hidden group">
                  <CardContent className="p-6">
                    <div className="rounded-full bg-primary/10 p-3 w-fit mb-4 text-primary">
                      {service.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold">{service.title}</h3>
                    <p className="mt-2 text-sm sm:text-base text-muted-foreground">{service.description}</p>
                    <div className="mt-4">
                      <Link 
                        href={`/products#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="inline-flex items-center text-primary font-medium text-sm sm:text-base"
                      >
                        Pelajari lebih lanjut 
                        <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-6 sm:px-8 md:px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Produk & Proyek Unggulan</h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground">
              Temukan solusi engineering kami yang telah dipercaya oleh klien ternama seperti PT Trakindo Utama dan PT Sanggar Sarana Baja
            </p>
          </motion.div>

          <Tabs defaultValue="body-repair" className="mt-8 sm:mt-12 max-w-7xl mx-auto">
            <div className="flex justify-center">
              <TabsList className="mb-8 flex flex-wrap justify-center">
                <TabsTrigger value="body-repair">Body Repair</TabsTrigger>
                <TabsTrigger value="fabrikasi-instalasi">Fabrikasi & Instalasi</TabsTrigger>
                <TabsTrigger value="logistik-pemeliharaan">Logistik & Pemeliharaan</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="body-repair" className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Body Repair Unit 745 & 777",
                    image: "/images/img_body_repair.png",
                    description: "Perbaikan bodi unit 745 dan 777 untuk PT Trakindo Utama, memenuhi standar kualitas tinggi."
                  },
                  {
                    title: "Body Repair Unit D10T",
                    image: "/images/img_body_repair_dua.png",
                    description: "Rekondisi unit D10T untuk PT Arabia Taj Internasional sesuai standar Australia."
                  },
                  {
                    title: "Body Repair Unit CMT96",
                    image: "/images/img_body_repair_tiga.png",
                    description: "Perbaikan bodi High Way Dump Truck CMT96 dengan pemeriksaan SOP ketat."
                  }
                ].map((product, index) => (
                  <Card key={index} className="overflow-hidden group">
                    <div className="relative h-48">
                      <Image 
                        src={product.image} 
                        alt={product.title} 
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-lg sm:text-xl font-semibold">{product.title}</h3>
                      <p className="mt-2 text-sm sm:text-base text-muted-foreground">{product.description}</p>
                      <Button variant="link" className="p-0 mt-2 text-sm sm:text-base" asChild>
                        <Link href="/products">Lihat Detail</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button variant="outline" asChild>
                  <Link href="/products">
                    Lihat Semua Proyek Body Repair
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="fabrikasi-instalasi" className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Instalasi Dump Unit WT50KL",
                    image: "/images/img_dumb.png",
                    description: "Pemasangan water tank untuk PT Sanggar Sarana Baja dengan pengujian anti-bocor."
                  },
                  {
                    title: "Pemasangan Safety Cover Glass",
                    image: "/images/img_pemasangan.png",
                    description: "Fabrikasi dan pemasangan bracket safety cover glass untuk PT SEM sesuai spesifikasi."
                  },
                  {
                    title: "Pembuatan Muffler & Grease Pump",
                    image: "/images/img_muffler.png",
                    description: "Pembuatan muffler dan grease pump portabel untuk efisiensi operasional unit."
                  }
                ].map((product, index) => (
                  <Card key={index} className="overflow-hidden group">
                    <div className="relative h-48">
                      <Image 
                        src={product.image} 
                        alt={product.title} 
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-lg sm:text-xl font-semibold">{product.title}</h3>
                      <p className="mt-2 text-sm sm:text-base text-muted-foreground">{product.description}</p>
                      <Button variant="link" className="p-0 mt-2 text-sm sm:text-base" asChild>
                        <Link href="/products">Lihat Detail</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button variant="outline" asChild>
                  <Link href="/products">
                    Lihat Semua Proyek Fabrikasi & Instalasi
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="logistik-pemeliharaan" className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Fuel Dispensing",
                    image: "/images/img_fuel.png",
                    description: "Pengisian solar dengan kapasitas 500 liter/menit, mempermudah operasional unit."
                  },
                  {
                    title: "Pengiriman Barang",
                    image: "/images/img_pengiriman.png",
                    description: "Pengiriman barang tepat waktu untuk klien seperti PT Cipta Krida Bahari."
                  },
                  {
                    title: "Perbaikan & Pencucian AC",
                    image: "/images/img_cuci_ac.png",
                    description: "Pemeliharaan AC untuk kinerja optimal dan sirkulasi udara bersih."
                  }
                ].map((product, index) => (
                  <Card key={index} className="overflow-hidden group">
                    <div className="relative h-48">
                      <Image 
                        src={product.image} 
                        alt={product.title} 
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-lg sm:text-xl font-semibold">{product.title}</h3>
                      <p className="mt-2 text-sm sm:text-base text-muted-foreground">{product.description}</p>
                      <Button variant="link" className="p-0 mt-2 text-sm sm:text-base" asChild>
                        <Link href="/products">Lihat Detail</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button variant="outline" asChild>
                  <Link href="/products">
                    Lihat Semua Solusi Logistik & Pemeliharaan
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-6 sm:px-8 md:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Mengapa Memilih Kami</h2>
              <p className="mt-4 text-base sm:text-lg text-muted-foreground">
                Dengan pengalaman dan komitmen kami, kami menghadirkan solusi manufaktur yang mendorong kesuksesan bisnis Anda.
              </p>
              
              <div className="mt-6 sm:mt-8 space-y-6">
                {[
                  {
                    icon: <TrendingUp className="h-6 w-6" />,
                    title: "Tenaga Kerja Profesional",
                    description: "Tim kami terdiri dari tenaga ahli yang kompeten dan berdedikasi di setiap bidang, memastikan hasil kerja yang optimal."
                  },
                  {
                    icon: <Shield className="h-6 w-6" />,
                    title: "Kualitas Unggul",
                    description: "Kami menjamin hasil kerja berkualitas tinggi yang memenuhi standar industri terbaik."
                  },
                  {
                    icon: <PenTool className="h-6 w-6" />,
                    title: "Komitmen kepada Pelanggan",
                    description: "Kami berdedikasi untuk memberikan kontribusi maksimal demi kesuksesan pelanggan."
                  },
                  {
                    icon: <Truck className="h-6 w-6" />,
                    title: "Logistik Terpercaya",
                    description: "Kami menyediakan logistik yang efisien dan suku cadang berkualitas untuk mendukung kebutuhan pelanggan."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="rounded-full bg-primary/10 p-3 h-12 w-12 flex items-center justify-center text-primary flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold">{item.title}</h3>
                      <p className="mt-1 text-sm sm:text-base text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-6 sm:mt-8">
                <Button asChild>
                  <Link href="/about">
                    Pelajari Lebih Lanjut Tentang Kami
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-1 lg:order-2"
            >
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <AspectRatio ratio={4/3}>
                  <Image 
                    src="https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Fasilitas industri" 
                    fill
                    className="object-cover"
                  />
                </AspectRatio>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client List Section */}
      <section className="py-12 sm:py-16 bg-muted/10">
        <div className="container mx-auto px-6 sm:px-8 md:px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-8"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Pelanggan Kami</h2>
            <p className="mt-2 text-base sm:text-lg text-muted-foreground">
              Kami bangga bermitra dengan perusahaan terkemuka di berbagai industri
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            className="max-w-7xl mx-auto"
          >
            <Card className="overflow-hidden shadow-md">
              <CardContent className="p-6">
                <div className="marquee">
                  <div className="marquee-content flex gap-8">
                    {[
                      { name: 'Trakindo Utama', image: '/images/image1.png' },
                      { name: 'Ritchie Bros Australia', image: '/images/image2.png' },
                      { name: 'Epiroc', image: '/images/image3.png' },
                      { name: 'Sankyu', image: '/images/image4.png' },
                      { name: 'Pionirbeton', image: '/images/image5.png' },
                      { name: 'Shopee Indonesia', image: '/images/image6.png' },
                      { name: 'SEM', image: '/images/image7.png' },
                      { name: 'Leighton Contractors', image: '/images/image8.png' },
                    ].concat([
                      { name: 'Trakindo Utama', image: '/images/image1.png' },
                      { name: 'Ritchie Bros Australia', image: '/images/image2.png' },
                      { name: 'Epiroc', image: '/images/image3.png' },
                      { name: 'Sankyu', image: '/images/image4.png' },
                      { name: 'Pionirbeton', image: '/images/image5.png' },
                    ]).map((client, index) => (
                      <div key={index} className="flex-shrink-0">
                        <div className="w-24 sm:w-28 h-14 sm:h-16 relative grayscale group-hover:opacity-80 hover:!opacity-100 transition-all duration-300">
                          <Image
                            src={client.image}
                            alt={client.name}
                            fill
                            className="object-contain p-2"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        <style jsx>{`
          .marquee {
            overflow: hidden;
            white-space: nowrap;
          }
          .marquee-content {
            display: inline-flex;
            animation: marquee 20s linear infinite;
          }
          .marquee:hover .marquee-content {
            animation-play-state: paused;
          }
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 sm:px-8 md:px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Siap Mengoptimalkan Operasional Anda?</h2>
              <p className="mt-4 text-base sm:text-lg opacity-90 max-w-2xl mx-auto">
                Hubungi kami hari ini untuk mendiskusikan bagaimana solusi engineering kami dapat meningkatkan efisiensi dan kualitas operasional Anda.
              </p>
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">
                    Hubungi Tim Kami
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/products">Jelajahi Solusi Kami</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}