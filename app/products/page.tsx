"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ArrowRight, ChevronRight, Search } from 'lucide-react'
import Image from 'next/image'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

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

// Services data
const services = [
  {
    id: 's1',
    name: 'Operator',
    category: 'operasional',
    description: 'Operator bersertifikasi untuk pengelolaan unit alat berat dengan fokus pada keselamatan dan efisiensi.',
    features: ['SIO Disnaker', 'Unloading/loading unit', 'Inspeksi harian', 'Laporan harian'],
    image: '/images/img_operator.png'
  },
  {
    id: 's2',
    name: 'Helper',
    category: 'operasional',
    description: 'Asisten teknis untuk inspeksi, perakitan, dan pemeliharaan unit sesuai standar operasional.',
    features: ['Kimper PTTU', 'Perakitan komponen', 'Preservasi unit', 'Stock check bulanan'],
    image: '/images/img_helper.png'
  },
  {
    id: 's3',
    name: 'Administrasi & Pelaporan',
    category: 'administrasi',
    description: 'Layanan administrasi data dan pelaporan harian hingga tahunan untuk operasional yard.',
    features: ['Input data', 'Laporan berkala', 'Manajemen inventaris', 'Penjadwalan kerja'],
    image: '/images/img_admin.png'
  },
  {
    id: 's4',
    name: 'Cleaning Service',
    category: 'operasional',
    description: 'Pemeliharaan kebersihan yard, kantor, dan pengelolaan limbah sesuai standar lingkungan.',
    features: ['Pembersihan yard', 'Pengelolaan limbah', 'Disinfeksi kantor', 'Laporan harian'],
    image: '/images/img_cleaning.png'
  },
  {
    id: 's5',
    name: 'Sektor Fabrikasi',
    category: 'fabrikasi',
    description: 'Fabrikasi inovatif untuk industri pertambangan dan alat berat dengan standar keselamatan tinggi.',
    features: ['Fabrikasi baja', 'Pengelasan presisi', 'Desain kustom', 'Kepatuhan HSE'],
    image: '/images/img_fabrikasi.png'
  },
  {
    id: 's6',
    name: 'Instalasi Listrik',
    category: 'kelistrikan',
    description: 'Perbaikan dan pemasangan sistem kelistrikan untuk memastikan operasional unit yang aman.',
    features: ['Perbaikan komponen', 'Pemasangan kabel', 'Pengujian sistem', 'Standar keselamatan'],
    image: '/images/img_instalasi_listrik.png'
  },
  {
    id: 's7',
    name: 'Perbaikan & Pencucian AC',
    category: 'perbaikan',
    description: 'Pemeliharaan dan perbaikan AC untuk performa optimal dan sirkulasi udara bersih.',
    features: ['Pembersihan filter', 'Perbaikan komponen', 'Pengecekan berkala', 'Efisiensi pendingin'],
    image: '/images/img_perbaikan.png'
  },
  {
    id: 's8',
    name: 'Pencucian, Pengecatan & Pengelasan Unit',
    category: 'pengecatan',
    description: 'Layanan pencucian, pengecatan, dan pengelasan untuk unit alat berat seperti 745 dan 777.',
    features: ['Pengecatan ulang', 'Pencucian unit', 'Pengelasan struktural', 'Kualitas SOP'],
    image: '/images/img_cuci_ac.png'
  },
  {
    id: 's9',
    name: 'Pengiriman Barang & Perbaikan Battery Jumper',
    category: 'perbaikan',
    description: 'Pengiriman tepat waktu dan perbaikan baterai untuk kebutuhan operasional.',
    features: ['Pengiriman cepat', 'Perbaikan baterai', 'Pengisian ulang', 'Kepatuhan SOP'],
    image: '/images/img_pengiriman.png'
  },
  {
    id: 's10',
    name: 'Pemasangan Safety Cover Glass',
    category: 'fabrikasi',
    description: 'Fabrikasi dan pemasangan safety cover glass dengan bracket kustom untuk unit.',
    features: ['Pembuatan bracket', 'Pengelasan', 'Pengecatan', 'Pemasangan presisi'],
    image: '/images/img_pemasangan.png'
  },
  {
    id: 's11',
    name: 'Body Repair',
    category: 'perbaikan',
    description: 'Perbaikan bodi unit alat berat sesuai standar internasional (Mexico, Australia, Dubai).',
    features: ['Rekondisi unit', 'Pencucian', 'Pengecatan', 'Pemeriksaan kualitas'],
    image: '/images/img_body_repair.png'
  },
  {
    id: 's12',
    name: 'Install Dump Unit WT50KL',
    category: 'fabrikasi',
    description: 'Pemasangan dan pengujian tangki air untuk unit WT50KL tanpa kebocoran.',
    features: ['Pemasangan tangki', 'Pengujian air', 'Pemeriksaan sambungan', 'Kualitas terjamin'],
    image: '/images/img_dumb.png'
  },
  {
    id: 's13',
    name: 'Loop Container & Oil Dispensing',
    category: 'fabrikasi',
    description: 'Sistem portabel untuk pengelolaan oli dan penyaringan bahan bakar.',
    features: ['Kidney loop', 'Penyaringan oli', 'Portabilitas', 'Kapasitas besar'],
    image: '/images/img_container.png'
  },
  {
    id: 's14',
    name: 'Fuel Dispensing',
    category: 'kelistrikan',
    description: 'Pengisian bahan bakar cepat dengan kapasitas 500 liter/menit untuk unit.',
    features: ['Pengisian cepat', 'Kapasitas besar', 'Efisiensi operasional', 'Kepatuhan SOP'],
    image: '/images/img_fuel.png'
  },
  {
    id: 's15',
    name: 'Pembuatan Muffler & Grease Pump',
    category: 'fabrikasi',
    description: 'Fabrikasi muffler dan pompa pelumas untuk kebutuhan unit alat berat.',
    features: ['Desain teknis', 'Fabrikasi presisi', 'Pengiriman', 'Efisiensi penggunaan'],
    image: '/images/img_muffler.png'
  },
  {
    id: 's16',
    name: 'Seal Cylinder',
    category: 'perbaikan',
    description: 'Penggantian seal cylinder pada forklift dan dozer untuk performa optimal.',
    features: ['Pembersihan cylinder', 'Pemasangan seal', 'Perakitan presisi', 'Kualitas terjamin'],
    image: '/images/img_seal.png'
  }
];

export default function ProductsPage() {
  const [activeTab] = useState('services');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Filter services based on search query and category
  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

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
              Layanan <span className="text-primary">Kami</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Solusi engineering terpercaya untuk pertambangan dan alat berat dengan fokus pada kualitas dan keselamatan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} className="w-full">
            <div className="flex flex-col md:flex-row justify-between gap-4 max-w-6xl mx-auto">
              <TabsList>
                <TabsTrigger value="services">Layanan</TabsTrigger>
              </TabsList>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <div className="relative w-full sm:w-64">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input 
                    type="search" 
                    placeholder="Cari..." 
                    className="pl-9"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full sm:w-48">
                    <SelectValue placeholder="Semua Kategori" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Semua Kategori</SelectItem>
                    <SelectItem value="operasional">Operasional</SelectItem>
                    <SelectItem value="administrasi">Administrasi</SelectItem>
                    <SelectItem value="fabrikasi">Fabrikasi</SelectItem>
                    <SelectItem value="perbaikan">Perbaikan</SelectItem>
                    <SelectItem value="kelistrikan">Kelistrikan</SelectItem>
                    <SelectItem value="pengecatan">Pengecatan</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Services Catalog */}
            <section className="py-12 md:py-16" id="catalog">
              <div className="container mx-auto px-4">
                <TabsContent value="services" className="mt-0">
                  {filteredServices.length > 0 ? (
                    <motion.div 
                      initial="hidden"
                      animate="visible"
                      variants={staggerContainer}
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto"
                    >
                      {filteredServices.map((service) => (
                        <motion.div key={service.id} variants={fadeInUp} id={service.name.toLowerCase().replace(/\s+/g, '-')}>
                          <Card className="h-full overflow-hidden group">
                            <div className="relative h-48">
                              <Image 
                                src={service.image} 
                                alt={service.name} 
                                fill
                                className="object-cover transition-transform group-hover:scale-105"
                              />
                            </div>
                            <CardContent className="p-6">
                              <Badge className="mb-2">
                                {service.category === 'operasional' ? 'Operasional' : 
                                 service.category === 'administrasi' ? 'Administrasi' : 
                                 service.category === 'fabrikasi' ? 'Fabrikasi' : 
                                 service.category === 'perbaikan' ? 'Perbaikan' : 
                                 service.category === 'kelistrikan' ? 'Kelistrikan' : 'Pengecatan'}
                              </Badge>
                              <h3 className="text-xl font-semibold">{service.name}</h3>
                              <p className="mt-2 text-muted-foreground">{service.description}</p>
                              
                              <div className="mt-4">
                                <h4 className="text-sm font-medium mb-2">Fitur Utama:</h4>
                                <ul className="space-y-1">
                                  {service.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                                      <ChevronRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                      <span>{feature}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              
                              <div className="mt-6 flex justify-between items-center">
                                <Button variant="outline" size="sm" asChild>
                                  <Link href="/contact">Minta Layanan</Link>
                                </Button>
                                <Button variant="ghost" size="sm" asChild>
                                  <Link href={`/contact?service=${service.id}`}>
                                    Pelajari Lebih Lanjut
                                    <ArrowRight className="ml-1 h-3 w-3" />
                                  </Link>
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </motion.div>
                  ) : (
                    <div className="text-center py-12 max-w-6xl mx-auto">
                      <div className="mb-4 text-muted-foreground">
                        <Search className="h-12 w-12 mx-auto" />
                      </div>
                      <h3 className="text-xl font-medium">Tidak ada layanan ditemukan</h3>
                      <p className="text-muted-foreground mt-2">
                        Coba sesuaikan kriteria pencarian
                      </p>
                      <Button 
                        variant="outline" 
                        className="mt-4"
                        onClick={() => setSearchQuery('')}
                      >
                        Reset Pencarian
                      </Button>
                    </div>
                  )}
                </TabsContent>
              </div>
            </section>
          </Tabs>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Proses Layanan Kami</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Dari konsultasi hingga pelaporan, kami memastikan kualitas dan keselamatan di setiap tahap
            </p>
          </motion.div>

          <div className="relative mt-16 max-w-6xl mx-auto">
            <div className="hidden md:block absolute left-0 right-0 top-1/4 h-0.5 bg-border"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Konsultasi & Perencanaan",
                  description: "Memahami kebutuhan pelanggan untuk merancang solusi yang tepat.",
                  icon: "/images/image17.jpeg"
                },
                {
                  step: "02",
                  title: "Fabrikasi & Perbaikan",
                  description: "Melaksanakan fabrikasi dan perbaikan unit dengan presisi tinggi.",
                  icon: "/images/image18.jpeg"
                },
                {
                  step: "03",
                  title: "Pengujian & Instalasi",
                  description: "Menguji dan memasang sistem untuk memastikan performa optimal.",
                  icon: "/images/image19.jpeg"
                },
                {
                  step: "04",
                  title: "Pengiriman & Pelaporan",
                  description: "Mengirimkan hasil dan menyediakan laporan operasional lengkap.",
                  icon: "/images/image20.jpeg"
                }
              ].map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="rounded-full w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg relative z-10 mx-auto mb-6">
                    {process.step}
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-xl font-semibold">{process.title}</h3>
                    <p className="mt-2 text-muted-foreground">{process.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold">Solusi Kustom Kami</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Kami menyediakan layanan fabrikasi, perbaikan, dan operasional kustom untuk mendukung industri pertambangan dan alat berat.
              </p>
              
              <div className="mt-8 space-y-6">
                {[
                  {
                    title: "Desain Kustom",
                    description: "Merancang solusi sesuai kebutuhan spesifik pelanggan."
                  },
                  {
                    title: "Fabrikasi Presisi",
                    description: "Menghasilkan komponen dengan kualitas dan akurasi tinggi."
                  },
                  {
                    title: "Perbaikan Unit",
                    description: "Merekondisi unit alat berat sesuai standar internasional."
                  },
                  {
                    title: "Dukungan Operasional",
                    description: "Mendukung operasional yard dengan tenaga terlatih."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="mt-1 text-muted-foreground">{item.description}</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8">
                <Button asChild>
                  <Link href="/contact">
                    Diskusikan Kebutuhan Anda
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
            >
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <AspectRatio ratio={4/3}>
                  <Image 
                    src="/images/img_solusi.png" 
                    alt="Solusi kustom" 
                    fill
                    className="object-cover"
                  />
                </AspectRatio>
              </div>
            </motion.div>
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
              <h2 className="text-3xl md:text-4xl font-bold">Siap Bermitra dengan Kami?</h2>
              <p className="mt-4 text-lg opacity-90 max-w-2xl mx-auto">
                Hubungi kami untuk solusi engineering yang mendukung efisiensi dan keselamatan operasional Anda.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">
                    Hubungi Kami
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">Minta Layanan</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}