  const categories = [
    {
      id: 'research',
      anchor: 'research',
      title: '1. Ana Kategori: Hukuki Araştırma',
      description: 'Araştırma tarafı iki net akışta ayrıldı: dava ve içtihat bulma ile hukuki kaynak bulma. Böylece öğrenci, stajyer veya avukat aradığı bilgi türünü daha hızlı filtreleyebiliyor.',
      meta: ['Dava ve içtihat', 'Akademik ve pratik kaynaklar', 'TR / US / EU etiketleri'],
      sections: [
        {
          id: 'case-law',
          title: '1.1 Dava & İçtihat Bulma',
          description: 'İçtihat veri tabanları, mahkeme karar arama motorları ve AI ile karar analizi araçları.',
          tags: ['İçtihat', 'Karar arama', 'AI analizi', 'Ülke: TR / US / EU', 'Mahkeme türü: AYM / Yargıtay / Danıştay'],
          tools: [
            { name: 'UYAP Karar Arama', desc: 'Yargıtay ve resmi karar aramalarında ilk başvuru noktası.', href: 'https://karararama.yargitay.gov.tr', tags: ['TR', 'Pratik', 'Yargıtay'] },
            { name: 'Anayasa Mahkemesi', desc: 'AYM kararları bilgi bankası ve bireysel başvuru içtihat takibi.', href: 'https://kararlarbilgibankasi.anayasa.gov.tr/', tags: ['TR', 'Pratik', 'AYM'] },
            { name: 'Resmi Gazete', desc: 'Yürürlükteki mevzuat, yönetmelik ve resmi ilanlar için temel resmi kaynak.', href: 'https://www.resmigazete.gov.tr', tags: ['TR', 'Pratik'] },
            { name: 'Apilex', desc: 'Semantik karar arama, mevzuat tarama ve belge oluşturma için yerli AI hukuk platformu.', href: 'https://www.apilex.ai/', tags: ['TR', 'AI', 'Pratik'] },
            { name: 'Kılavuz', desc: 'Türk hukuk mevzuatı ve yüksek yargı kararlarıyla çalışan hukuk yapay zeka asistanı.', href: 'https://kilavuztek.com/', tags: ['TR', 'AI', 'Pratik'] },
            { name: 'Lextum AI', desc: 'İçtihat arama, karar analizi ve dilekçe hazırlığı tarafında yerli çözüm.', href: 'https://www.lextum.ai/', tags: ['TR', 'AI', 'Pratik'] },
            { name: 'Casetext', desc: 'ABD dava hukuku araştırması ve karar arama için uzun süre yaygın kullanılan platform.', href: 'https://casetext.com', tags: ['US', 'Pratik'] },
            { name: 'Westlaw', desc: 'ABD ve küresel hukuk araştırmalarında kullanılan kapsamlı içtihat ve kaynak veri tabanı.', href: 'https://www.westlaw.com', tags: ['US', 'Pratik'] },
            { name: 'LexisNexis', desc: 'İçtihat, mevzuat ve profesyonel hukuk araştırması için köklü küresel platform.', href: 'https://www.lexisnexis.com', tags: ['US', 'Pratik'] },
            { name: 'Paxton AI', desc: 'ABD federal ve eyalet kaynakları üzerinde doğrulanabilir AI hukuki araştırma sunar.', href: 'https://www.paxton.ai/research', tags: ['US', 'AI', 'Pratik'] },
            { name: 'Harvey', desc: 'Büyük hukuk ekipleri için araştırma, due diligence ve karmaşık legal workflow platformu.', href: 'https://www.harvey.ai/', tags: ['US', 'AI', 'Pratik'] },
            { name: 'Vaquill', desc: 'Doğrulanmış atıf mantığıyla case law ve mevzuat araştırması yapan modern AI araştırma aracı.', href: 'https://www.vaquill.ai/', tags: ['US', 'EU', 'AI', 'Pratik'] },
            { name: 'Fastcase', desc: 'Barolarla yaygın kullanılan ve artık vLex ekosistemine bağlanan araştırma çözümü.', href: 'https://www.fastcase.com/', tags: ['US', 'Pratik'] },
            { name: 'Descrybe', desc: 'ABD içtihatlarını sade dilde özetleyen ve aramayı kolaylaştıran erişilebilir araştırma aracı.', href: 'https://descrybe.com/', tags: ['US', 'AI', 'Pratik'] },
            { name: 'CourtListener', desc: 'Mahkeme kararları, dockets ve açık hukuk verisi için güçlü erişim sağlar.', href: 'https://www.courtlistener.com', tags: ['US', 'Pratik'] },
            { name: 'Judicata', desc: 'Karar arama ve litigation research tarafında analitik araştırma yaklaşımı sunar.', href: 'https://www.judicata.com', tags: ['US', 'AI', 'Pratik'] },
            { name: 'CaseMine', desc: 'Çok yargı alanlı karar ve mevzuat araştırması için AI destekli hukuk platformudur.', href: 'https://www.casemine.com', tags: ['US', 'EU', 'AI', 'Pratik'] },
            { name: 'Westlaw Precision', desc: 'Gelişmiş ABD hukuki araştırması ve karar filtreleme çözümü.', href: 'https://www.thomsonreuters.com/en-us/help/westlaw-precision.html', tags: ['US', 'AI', 'Pratik'] },
            { name: 'Lexis+ AI', desc: 'LexisNexis içeriği üzerinde AI destekli hukuki araştırma deneyimi sunar.', href: 'https://www.lexisnexis.com/en-int/legal/lexis-plus-ai', tags: ['US', 'AI', 'Pratik'] },
            { name: 'vLex', desc: 'Çok yargı alanlı veri tabanı ve AI tabanlı hukuki araştırma altyapısı.', href: 'https://vlex.com/', tags: ['EU', 'US', 'AI', 'Pratik'] },
            { name: 'Loislaw', desc: 'ABD hukuki araştırmasında kullanılan klasik karar ve mevzuat veri tabanlarından biridir.', href: 'https://www.loislaw.com', tags: ['US', 'Pratik'] },
            { name: 'CaseMark', desc: 'Deposition, medical record ve dava dosyalarında soru-cevap ile analiz sağlayan platform.', href: 'https://www.casemark.com/', tags: ['US', 'AI', 'Pratik'] }
          ]
        },
        {
          id: 'source-finding',
          title: '1.2 Hukuki Kaynak Bulma',
          description: 'Makale, kitap, kanun metni ve uluslararası hukuk kaynaklarının akademik/pratik ayrımıyla listelendiği bölüm.',
          tags: ['Akademik', 'Pratik', 'Kanun metni', 'Uluslararası kaynak'],
          tools: [
            { name: 'HeinOnline', desc: 'Hukuk dergileri, tarihi kaynaklar ve akademik içerik için güçlü veri tabanı.', href: 'https://home.heinonline.org/', tags: ['Akademik', 'US'] },
            { name: 'JSTOR', desc: 'Akademik makaleler ve hukukla bağlantılı sosyal bilim literatürü için köklü arşiv.', href: 'https://www.jstor.org', tags: ['Akademik'] },
            { name: 'SSRN', desc: 'Hukuk ve sosyal bilimlerde working paper ve erken dönem araştırma paylaşımı için önemlidir.', href: 'https://www.ssrn.com', tags: ['Akademik'] },
            { name: 'Bloomberg Law', desc: 'Araştırma, dava takibi ve profesyonel hukuk bilgisi için kapsamlı platform.', href: 'https://pro.bloomberglaw.com/', tags: ['Pratik', 'US'] },
            { name: 'Cornell LII', desc: 'Açık erişimli mevzuat ve karar referansları için temel kaynak.', href: 'https://www.law.cornell.edu/', tags: ['Akademik', 'Pratik', 'US'] },
            { name: 'Google Scholar', desc: 'Makaleler, tezler ve hukuki akademik literatür taraması için ideal başlangıç.', href: 'https://scholar.google.com', tags: ['Akademik'] },
            { name: 'ResearchGate', desc: 'Akademik yayınlara, yazar profillerine ve araştırma paylaşımlarına erişim sağlar.', href: 'https://www.researchgate.net', tags: ['Akademik'] },
            { name: 'Fastcase', desc: 'Amerikan birincil hukuk kaynaklarına daha erişilebilir bir araştırma yolu sunar.', href: 'https://www.fastcase.com/', tags: ['Pratik', 'US'] },
            { name: 'EUR-Lex', desc: 'Avrupa Birliği mevzuatı, kararları ve resmi belgeleri için temel resmi kaynaktır.', href: 'https://eur-lex.europa.eu', tags: ['EU', 'Pratik'] },
            { name: 'N-Lex', desc: 'Avrupa ülkelerinin ulusal mevzuat veri tabanlarına erişim sağlayan hukuk portalıdır.', href: 'https://n-lex.europa.eu', tags: ['EU', 'Pratik'] },
            { name: 'Legislation.gov.uk', desc: 'Birleşik Krallık mevzuat metinlerine resmi erişim sağlar.', href: 'https://www.legislation.gov.uk', tags: ['Pratik'] },
            { name: 'WorldLII', desc: 'Farklı ülkelerin hukuk veri tabanlarını bir araya getiren açık erişimli platformdur.', href: 'http://www.worldlii.org', tags: ['Akademik', 'Pratik'] },
            { name: 'NYU Law Global', desc: 'Yabancı, karşılaştırmalı ve uluslararası hukuk araştırmaları için rehber kaynak sunar.', href: 'https://www.nyulawglobal.org', tags: ['Akademik', 'Pratik'] },
            { name: 'Zotero', desc: 'Makale, kitap ve web kaynaklarını toplama, alıntılama ve düzenleme için güçlü araştırma asistanı.', href: 'https://www.zotero.org/', tags: ['Akademik', 'Pratik'] },
            { name: 'Mendeley', desc: 'Akademik kaynak düzenleme, okuma ve atıf üretimi için yaygın referans yöneticisi.', href: 'https://www.mendeley.com/', tags: ['Akademik'] },
            { name: 'CustomGPT.ai', desc: 'Kendi hukuk kaynakların üzerinde alıntı veren özel asistan kurmanı sağlar.', href: 'https://customgpt.ai/', tags: ['AI', 'Pratik'] },
            { name: 'Bloomberg Law AI Solutions', desc: 'Kurumsal araştırma ve karar destek süreçlerine AI katmanı ekler.', href: 'https://professional.bloomberg.com/solutions/ai/', tags: ['AI', 'Pratik', 'US'] }
          ]
        }
      ]
    },
    {
      id: 'writing',
      anchor: 'writing',
      title: '2. Ana Kategori: Üretim & Yazım Araçları',
      description: 'Burada araçlar sadece “yazı yazıyor” diye değil, hukuki metin üretimi ile özetleme/analiz olarak iki ayrı kullanım senaryosunda sınıflandırıldı.',
      meta: ['Dilekçe ve sözleşme', 'Özetleme ve case brief', 'Legal AI writing'],
      sections: [
        {
          id: 'legal-writing',
          title: '2.1 Hukuki Metin Yazımı',
          description: 'Dilekçe oluşturma, sözleşme drafting ve hukuki üretim odaklı AI araçları.',
          tags: ['Dilekçe', 'Sözleşme', 'Drafting', 'Legal AI'],
          tools: [
            { name: 'Harvey Drafting', desc: 'Hukuki araştırma, sözleşme ve metin üretimini tek yapıda sunan gelişmiş legal AI platformu.', href: 'https://www.harvey.ai', tags: ['AI', 'Pratik'] },
            { name: 'Spellbook', desc: 'Word içinde sözleşme drafting ve review süreçlerini hızlandırır.', href: 'https://www.spellbook.legal', tags: ['AI', 'Pratik'] },
            { name: 'Paxton AI', desc: 'Araştırma ile birlikte sözleşme, motion ve hukuki yazım üretimini destekleyen AI asistan.', href: 'https://www.paxton.ai', tags: ['US', 'AI', 'Pratik'] },
            { name: 'Clausebase', desc: 'Clause kütüphanesi ve belge otomasyonu mantığıyla hukuki metin üretimini standardize eder.', href: 'https://www.clausebase.com', tags: ['AI', 'Pratik'] },
            { name: 'Juro', desc: 'Sözleşme oluşturma, onay akışı ve yaşam döngüsü yönetimini bir arada sunar.', href: 'https://juro.com', tags: ['AI', 'Pratik'] },
            { name: 'LawGeex', desc: 'Sözleşme review ve uyumluluk kontrolü için AI tabanlı otomasyon çözümüdür.', href: 'https://www.lawgeex.com', tags: ['AI', 'Pratik'] },
            { name: 'Ironclad', desc: 'Kurumsal sözleşme yaşam döngüsü ve üretim akışlarını yönetir.', href: 'https://ironcladapp.com/', tags: ['AI', 'Pratik'] },
            { name: 'Gavel', desc: 'Belge otomasyonu ve sözleşme review kombinasyonu sunar.', href: 'https://www.gavel.io/', tags: ['AI', 'Pratik'] },
            { name: 'OveK Hukuk', desc: 'Dilekçe, karar arama ve sözleşme analizi için yerli AI platformu.', href: 'https://www.ovekhukuk.com/', tags: ['TR', 'AI', 'Pratik'] },
            { name: 'LegalOn Technologies', desc: 'Sözleşme playbook mantığıyla çalışan AI review ve drafting çözümü.', href: 'https://www.legalontech.com/', tags: ['AI', 'Pratik'] },
            { name: 'Outlaw AI', desc: 'Sözleşme oluşturma, müzakere ve yönetim akışlarını otomatikleştiren legaltech platformudur.', href: 'https://www.outlaw.ai', tags: ['AI', 'Pratik'] },
            { name: 'goHeather', desc: 'Özellikle sözleşme review ve redline tarafında pratik AI kullanım sunar.', href: 'https://www.goheather.io/ai-document-review-software', tags: ['AI', 'Pratik'] },
            { name: 'Paxton AI Drafting', desc: 'Motions, contracts ve client letters gibi üretimleri hızlandıran all-in-one legal assistant.', href: 'https://www.paxton.ai/drafting', tags: ['US', 'AI', 'Pratik'] },
            { name: 'Legora', desc: 'Araştırma, review ve Word içinde drafting yeteneklerini birleştiren ortak çalışma alanı.', href: 'https://legora.com/', tags: ['EU', 'AI', 'Pratik'] },
            { name: 'Luminance', desc: 'Sözleşme draft, negotiate ve comply akışlarını uçtan uca legal-grade AI ile destekler.', href: 'https://www.luminance.com/', tags: ['EU', 'AI', 'Pratik'] },
            { name: 'Robin AI', desc: 'Kurumsal sözleşmeler üzerinde hızlı review, analysis ve finalize akışı sağlar.', href: 'https://robinai.com/', tags: ['EU', 'AI', 'Pratik'] },
            { name: 'Draftwise', desc: 'Özellikle precedent tabanlı sözleşme drafting ve negotiation için güçlü bir araçtır.', href: 'https://www.draftwise.com/', tags: ['AI', 'Pratik'] },
            { name: 'Lamicus', desc: 'AI native kontrat editörü ile anlatılan ihtiyaçtan profesyonel taslak üretir.', href: 'https://www.lamicus.com/', tags: ['AI', 'Pratik'] },
            { name: 'LawVu Draft', desc: 'Microsoft Word içinde kendi clause ve precedent bilginle sözleşme üretir ve review eder.', href: 'https://lawvudraft.com/', tags: ['AI', 'Pratik'] },
            { name: 'LexIQ', desc: 'In-house ekipler için Word tabanlı contract drafting ve review ajanları sağlar.', href: 'https://lexiq.io/', tags: ['AI', 'Pratik'] },
            { name: 'AllDrafts', desc: 'Drafting, formatting, PII kontrolü ve kontrat üretimini tek takımda sunar.', href: 'https://my.alldrafts.com', tags: ['AI', 'Pratik'] },
            { name: 'Legitt AI', desc: 'No-code CLM yaklaşımıyla hızlı sözleşme üretimi ve review sunar.', href: 'https://legittai.com/legal/', tags: ['AI', 'Pratik'] },
            { name: 'Lawformer', desc: 'Sektör-spesifik legal AI agent yapısıyla kontrat yaşam döngüsüne odaklanır.', href: 'https://lawformer.com/', tags: ['AI', 'Pratik'] },
            { name: 'Contractize.ai', desc: 'Anlaşma üretimi, clause analizi ve AI önerileri için hepsi bir arada platform.', href: 'https://www.contractize.ai/', tags: ['AI', 'Pratik'] },
          ]
        },
        {
          id: 'summary-analysis',
          title: '2.2 Özetleme & Analiz',
          description: 'Karar özetleme, uzun metin sadeleştirme ve case brief oluşturma odaklı araçlar.',
          tags: ['Özetleme', 'Uzun metin', 'Case brief', 'Analiz'],
          tools: [
            { name: 'Clearbrief', desc: 'Kaynak bağlantılı dava yazımı ve doğrulanabilir destekleyici alıntılar üretir.', href: 'https://clearbrief.com/', tags: ['AI', 'Pratik'] },
            { name: 'Humata AI', desc: 'PDF ve doküman setleri üzerinde soru-cevap, özet ve analiz sunar.', href: 'https://www.humata.ai/', tags: ['AI'] },
            { name: 'DocLegal.ai', desc: 'Temel hukuki belge üretimiyle birlikte metin review desteği verir.', href: 'https://doclegal.ai/', tags: ['AI'] },
            { name: 'Kira Systems', desc: 'Sözleşme ve belge setlerinden veri çıkarma, inceleme ve analiz için kullanılır.', href: 'https://kirasystems.com', tags: ['AI', 'Pratik'] },
            { name: 'Evisort', desc: 'Sözleşme analizi, metadata çıkarımı ve yaşam döngüsü görünürlüğü sağlar.', href: 'https://www.evisort.com', tags: ['AI', 'Pratik'] },
            { name: 'Luminance Analysis', desc: 'Belge inceleme, due diligence ve sözleşme analizi için güçlü AI altyapısı sunar.', href: 'https://www.luminance.com', tags: ['AI', 'Pratik'] },
            { name: 'Diligen', desc: 'Sözleşme inceleme ve due diligence süreçlerini hızlandıran analiz aracıdır.', href: 'https://www.diligen.com', tags: ['AI', 'Pratik'] },
            { name: 'ThoughtRiver', desc: 'Risk analizi ve sözleşme review süreçlerini otomatikleştiren AI çözümüdür.', href: 'https://thoughtriver.com', tags: ['AI', 'Pratik'] },
            { name: 'Summize', desc: 'Sözleşme özetleme ve anlaşma verisini ekipler için daha görünür hale getirir.', href: 'https://www.summize.com', tags: ['AI', 'Pratik'] },
            { name: 'ContractPodAi', desc: 'Sözleşme yönetimi, review ve hukuki analiz tarafında kurumsal AI çözümleri sunar.', href: 'https://www.contractpodai.com', tags: ['AI', 'Pratik'] },
            { name: 'Everlaw', desc: 'E-discovery, delil setleri ve büyük doküman gruplarında analiz sağlar.', href: 'https://www.everlaw.com/', tags: ['AI', 'Pratik'] },
            { name: 'Relativity', desc: 'Çok büyük veri ve inceleme iş akışları için legal data intelligence çözümü.', href: 'https://www.relativity.com/', tags: ['AI', 'Pratik'] },
            { name: 'Legalyze.ai', desc: 'Discovery ve dava belgelerinde hızlı analiz, özet ve çalışma notları üretir.', href: 'https://www.legalyze.ai/', tags: ['AI', 'Pratik'] },
            { name: 'CaseMark', desc: 'Deposition summary, medical chronology ve matter-based document intelligence sunar.', href: 'https://www.casemark.com/', tags: ['US', 'AI', 'Pratik'] },
            { name: 'Harvey', desc: 'Due diligence, contract analysis ve complex workflow analizinde büyük ekiplerce kullanılır.', href: 'https://www.harvey.ai/', tags: ['US', 'AI', 'Pratik'] },
          ]
        }
      ]
    },
    {
      id: 'learning',
      anchor: 'learning',
      title: '3. Ana Kategori: Öğrenme & Pratik',
      description: 'Bu bölüm özellikle öğrenciler için güçlü kuruldu: soru üretme, sınav hazırlık ve kavram anlama araçları ayrı akışlar halinde sunuluyor.',
      meta: ['Quiz ve soru üretimi', 'Flashcard ve spaced repetition', 'ELI5 ve kavram anlama'],
      sections: [
        {
          id: 'question-generation',
          title: '3.1 Soru Üretme',
          description: 'Quiz, çoktan seçmeli ve açık uçlu soru üretme odaklı çalışma araçları.',
          tags: ['Quiz', 'MCQ', 'Açık uçlu', 'Soru üretimi'],
          tools: [
            { name: 'TurinQ', desc: 'PDF, not veya videodan quiz ve soru setleri oluşturan AI çalışma aracı.', href: 'https://turinq.com/', tags: ['AI', 'Pratik'] },
            { name: 'CustomGPT.ai', desc: 'Kendi ders veya hukuk kaynakların üzerinden soru akışı kurgulamak için kullanılabilir.', href: 'https://customgpt.ai/', tags: ['AI'] },
            { name: 'Quillionz', desc: 'Metinlerden otomatik soru üretimi ve quiz hazırlama için kullanılan AI aracıdır.', href: 'https://www.quillionz.com', tags: ['AI', 'Pratik'] },
            { name: 'QuestionWell', desc: 'Ders ve okuma materyallerinden hızlıca soru setleri hazırlamayı kolaylaştırır.', href: 'https://questionwell.org', tags: ['AI', 'Pratik'] },
            { name: 'MagicSchool AI', desc: 'Eğitim amaçlı soru üretme, çalışma materyali ve içerik hazırlama desteği sağlar.', href: 'https://www.magicschool.ai', tags: ['AI', 'Pratik'] },
            { name: 'Quimbee', desc: 'MCQ, essay practice ve case brief destekli law school çalışma sistemi sunar.', href: 'https://www.quimbee.com/', tags: ['US', 'AI', 'Pratik'] },
            { name: 'Lexplug', desc: 'AI case brief, practice questions ve interaktif soru-cevap odaklı modern eğitim aracı.', href: 'https://www.lexplug.com/', tags: ['US', 'AI', 'Pratik'] }
          ]
        },
        {
          id: 'exam-prep',
          title: '3.2 Sınav & Pratik Hazırlık',
          description: 'Flashcard, deneme, spaced repetition ve tekrarlı öğrenme araçları.',
          tags: ['Flashcard', 'Spaced repetition', 'Deneme', 'Pratik'],
          tools: [
            { name: 'Anki', desc: 'Aralıklı tekrar yöntemiyle kavram, madde ve içtihat ezberi yapmayı kolaylaştırır.', href: 'https://apps.ankiweb.net/', tags: ['Pratik'] },
            { name: 'Anki-Decks', desc: 'Hazır desteler üzerinden hızlı tekrar ve sınav öncesi çalışma imkanı sunar.', href: 'https://anki-decks.com/', tags: ['Pratik'] },
            { name: 'Brainscape', desc: 'Flashcard temelli yapılandırılmış çalışma ve tekrar sistemi.', href: 'https://www.brainscape.com/', tags: ['Pratik'] },
            { name: 'Quizlet', desc: 'Flashcard, quiz ve tekrar setleri ile sınav hazırlığını hızlandıran popüler platformdur.', href: 'https://quizlet.com', tags: ['Pratik'] },
            { name: 'AdaptiBar', desc: 'Bar exam odaklı soru pratiği ve performans takibi için yaygın biçimde kullanılır.', href: 'https://www.adaptibar.com', tags: ['US', 'Pratik'] },
            { name: 'Bar Exam Toolbox', desc: 'Bar sınavı çalışma planı, içerik ve rehberlik sunan hazırlık platformudur.', href: 'https://barexamtoolbox.com', tags: ['US', 'Pratik'] },
            { name: 'Quimbee', desc: 'Case briefs, flashcards, multiple-choice ve essay practice ile law school prep sağlar.', href: 'https://www.quimbee.com/', tags: ['US', 'Pratik'] },
            { name: 'Casebriefs', desc: 'Case brief, outline ve ders bazlı hukuk çalışma içeriği sunar.', href: 'https://www.casebriefs.com', tags: ['US', 'Pratik'] },
            { name: 'Studicata', desc: 'Law school ve bar prep için outlines, video anlatımlar ve case briefs sunar.', href: 'https://www.studicata.com/', tags: ['US', 'Pratik'] },
            { name: 'BARBRI', desc: 'Bar exam, SQE ve law school prep tarafında küresel ölçekte kullanılan eğitim çözümü.', href: 'https://www.barbri.com/', tags: ['US', 'Pratik'] },
            { name: 'Readwise', desc: 'Okuduğun highlightları spaced repetition mantığıyla tekrar ettirir.', href: 'https://readwise.io/', tags: ['Pratik'] }
          ]
        },
        {
          id: 'concept-tools',
          title: '3.3 Konu Anlama Araçları',
          description: 'Hukuki kavramları açıklayan, metni sadeleştiren ve ELI5 tarzı anlatım sunan araçlar.',
          tags: ['Kavram açıklama', 'Basitleştirme', 'ELI5', 'AI anlatım'],
          tools: [
            { name: 'UPDF AI', desc: 'PDF içeriğini açıklama, özetleme ve sadeleştirme için kullanışlı AI katmanı sunar.', href: 'https://updf.com/updf-ai/', tags: ['AI'] },
            { name: 'eli5it.app', desc: 'Karmaşık konuları daha basit seviyede açıklama amacıyla kullanılan araç.', href: 'https://eli5it.app/', tags: ['AI'] },
            { name: 'JustELI5', desc: 'Metin veya konu başlığını sade ve anlaşılır bir dille açıklar.', href: 'https://justeli5.com/', tags: ['AI'] },
            { name: 'ChatPDF', desc: 'PDF dosyalarıyla sohbet ederek içerik anlama ve özet çıkarma imkanı sunar.', href: 'https://www.chatpdf.com', tags: ['AI', 'Pratik'] },
            { name: 'Perplexity', desc: 'Kaynak göstererek araştırma ve hızlı kavram açıklaması sunan AI arama motorudur.', href: 'https://www.perplexity.ai', tags: ['AI', 'Pratik'] },
            { name: 'Explainpaper', desc: 'Akademik metinlerde zor kısımları sadeleştirerek daha hızlı anlamayı kolaylaştırır.', href: 'https://www.explainpaper.com', tags: ['AI', 'Akademik'] },
            { name: 'Scholarcy', desc: 'Akademik metin özetleme ve kaynaklardan ana noktaları çıkarma için kullanılır.', href: 'https://www.scholarcy.com', tags: ['AI', 'Akademik'] },
            { name: 'Airstrip', desc: 'Hukuki dokümanları daha hızlı anlamak ve üretmek için AI destekli yardımcı.', href: 'https://useairstrip.com/', tags: ['AI'] },
            { name: 'Sonix', desc: 'Ses kayıtlarından metin çıkararak ders, seminer veya moot hazırlığında fayda sağlar.', href: 'https://sonix.ai/', tags: ['AI', 'Pratik'] },
            { name: 'Lexplug', desc: 'ELI5 mode ve Gunnerbot benzeri araçlarla karmaşık case law içeriğini basitleştirir.', href: 'https://www.lexplug.com/', tags: ['US', 'AI', 'Pratik'] },
            { name: 'Studicata', desc: 'Zor doctrinal konuları sade video ve outline mantığıyla anlaşılır hale getirir.', href: 'https://www.studicata.com/', tags: ['US', 'Pratik'] }
          ]
        }
      ]
    },
    {
      id: 'organization',
      anchor: 'organization',
      title: '4. Ana Kategori: Organizasyon & Verimlilik',
      description: 'Öğrenci veya hukuk profesyoneli fark etmeksizin düzenli çalışan herkes için not alma, dosya yönetimi ve zaman planlama araçları ayrılaştırıldı.',
      meta: ['Not alma', 'PDF ve annotation', 'Pomodoro ve task tracking'],
      sections: [
        {
          id: 'note-taking',
          title: '4.1 Not Alma',
          description: 'Bilgi tabanı kurma, ders notu toplama ve kişisel hukuk bilgi ağı oluşturma araçları.',
          tags: ['Not alma', 'Bilgi tabanı', 'Workspace'],
          tools: [
            { name: 'Notion', desc: 'Ders, dava, proje ve kişisel çalışma alanlarını tek yapıda tutar.', href: 'https://www.notion.so', tags: ['Pratik'] },
            { name: 'Obsidian', desc: 'Bağlantılı not alma ve kavram ağları kurmak için çok güçlüdür.', href: 'https://obsidian.md/', tags: ['Pratik'] },
            { name: 'RemNote', desc: 'Not alma ile aktif tekrar mantığını birleştirerek öğrenme sistemini güçlendirir.', href: 'https://www.remnote.com', tags: ['Pratik'] },
            { name: 'Capacities', desc: 'Nesne tabanlı bilgi organizasyonu ile kişisel bilgi tabanı kurmayı kolaylaştırır.', href: 'https://capacities.io', tags: ['Pratik'] },
            { name: 'Readwise', desc: 'Okuma highlightlarını not sistemine geri taşıyarak ikinci beyin kurgusunu güçlendirir.', href: 'https://readwise.io/', tags: ['Pratik'] },
            { name: 'Zotero', desc: 'Kaynak toplama, not düşme ve atıf düzeni kurma için araştırma odaklı notlama sunar.', href: 'https://www.zotero.org/', tags: ['Akademik', 'Pratik'] },
            { name: 'Mendeley', desc: 'Akademik okuma ve kütüphane organizasyonu için faydalı referans merkezi sağlar.', href: 'https://www.mendeley.com/', tags: ['Akademik'] }
          ]
        },
        {
          id: 'file-management',
          title: '4.2 Dosya & Kaynak Yönetimi',
          description: 'PDF düzenleme, highlight ve annotation odaklı kaynak yönetim araçları.',
          tags: ['PDF', 'Highlight', 'Annotation', 'Kaynak yönetimi'],
          tools: [
            { name: 'Zotero Library', desc: 'Kaynak toplama, atıf ve araştırma klasörlerini düzenleme için güçlü referans yöneticisi.', href: 'https://www.zotero.org', tags: ['Akademik', 'Pratik'] },
            { name: 'Mendeley Library', desc: 'Akademik PDF arşivi ve referans düzeni kurmak için kullanışlı bir kaynak yöneticisidir.', href: 'https://www.mendeley.com', tags: ['Akademik'] },
            { name: 'LiquidText', desc: 'Kaynaklar arası ilişki kurarak aktif okuma ve not sentezi sağlar.', href: 'https://www.liquidtext.net/', tags: ['Pratik'] },
            { name: 'PDF Expert', desc: 'PDF okuma, düzenleme ve işaretleme için hızlı ve temiz arayüz sunar.', href: 'https://pdfexpert.com/', tags: ['Pratik'] },
            { name: 'Readwise Reader', desc: 'Highlight, okuma takibi ve kaynaklardan özet çıkarma akışını bir araya getirir.', href: 'https://readwise.io', tags: ['Pratik'] },
            { name: 'iAnnotate', desc: 'Yoğun annotation ihtiyacı olan kullanıcılar için güçlü PDF işaretleme deneyimi verir.', href: 'https://www.iannotate.com/', tags: ['Pratik'] },
            { name: 'Clio', desc: 'Dosya, müvekkil ve operasyon yönetimini tek sistemde toplar.', href: 'https://www.clio.com/', tags: ['AI', 'Pratik'] },
            { name: 'NetDocuments', desc: 'Bulut tabanlı document management ve legal AI assistant katmanı sunar.', href: 'https://www.netdocuments.com/', tags: ['AI', 'Pratik'] },
            { name: 'iManage', desc: 'Belge, e-posta, knowledge search ve workflow yönetimini güvenli yapıda sunar.', href: 'https://imanage.com/', tags: ['AI', 'Pratik'] },
            { name: 'Filevine', desc: 'Matter, document ve workflow bileşenlerini tek legal intelligence sistemi içinde toplar.', href: 'https://www.filevine.com/', tags: ['AI', 'Pratik'] }
          ]
        },
        {
          id: 'time-management',
          title: '4.3 Zaman Yönetimi',
          description: 'Pomodoro, task tracking, takvim ve deadline planlama araçları.',
          tags: ['Pomodoro', 'Task tracking', 'Takvim', 'Deadline'],
          tools: [
            { name: 'Toggl', desc: 'Görev süresi ölçme ve çalışma raporları için sade zaman takip aracı.', href: 'https://toggl.com', tags: ['Pratik'] },
            { name: 'Clockify', desc: 'Çalışma sürelerini kaydetme ve proje bazlı zaman yönetimi için kullanılır.', href: 'https://clockify.me', tags: ['Pratik'] },
            { name: 'Motion', desc: 'Takvim, görev ve otomatik zaman bloklama ile planlamayı optimize eder.', href: 'https://www.usemotion.com', tags: ['AI', 'Pratik'] },
            { name: 'Zeeg', desc: 'Görüşme planlama ve zaman bloklama için modern scheduling aracı.', href: 'https://zeeg.me/', tags: ['Pratik'] },
            { name: 'LawToolBox', desc: 'Mahkeme takvimi ve deadline hesaplama için hukuk odaklı çözüm.', href: 'https://lawtoolbox.com/', tags: ['AI', 'Pratik'] },
            { name: 'PracticePanther', desc: 'Case workflow, automation ve takvim tabanlı hukuk pratiği yönetimi sağlar.', href: 'https://www.practicepanther.com/', tags: ['Pratik'] },
            { name: 'MyCase', desc: 'Casework, client service ve finansal görünürlük için birleşik practice management çözümü.', href: 'https://www.mycase.com/', tags: ['Pratik'] },
            { name: 'Smokeball', desc: 'Automatic time tracking, forms library ve legal calendaring ile verimlilik sağlar.', href: 'https://www.smokeball.com/', tags: ['AI', 'Pratik'] },
            { name: 'Docketwise', desc: 'Özellikle immigration tarafında task, calendaring ve matter tracking çözümleri sunar.', href: 'https://www.docketwise.com/', tags: ['Pratik'] }
          ]
        }
      ]
    },
    {
      id: 'career',
      anchor: 'career',
      title: '5. Ana Kategori: Kariyer & Uygulama',
      description: 'Bu kısım projeyi farklılaştırır: CV araçları, staj/iş platformları ve moot court odaklı kaynaklar tek yerde toplanıyor.',
      meta: ['CV ve başvuru', 'Staj ve iş platformları', 'Moot court ve competition'],
      sections: [
        {
          id: 'cv-tools',
          title: '5.1 CV & Başvuru Araçları',
          description: 'CV hazırlama, başvuru kalitesi artırma ve kariyer materyali düzenleme araçları.',
          tags: ['CV', 'Resume', 'Başvuru'],
          tools: [
            { name: 'Kickresume', desc: 'Şablonlu CV, kapak yazısı ve başvuru materyali üretimi için yaygın kullanılan platform.', href: 'https://www.kickresume.com', tags: ['Pratik'] },
            { name: 'Resume.io', desc: 'Hızlı CV düzenleme ve profesyonel özgeçmiş çıktısı almak için pratik araç.', href: 'https://resume.io', tags: ['Pratik'] },
            { name: 'Rezi AI', desc: 'ATS uyumlu CV ve başvuru metinleri hazırlamak için AI destekli çözüm sunar.', href: 'https://www.rezi.ai', tags: ['AI', 'Pratik'] },
            { name: 'ResumeBuilder', desc: 'ATS uyumlu CV ve başvuru materyali hazırlamak için çevrim içi araç.', href: 'https://www.resumebuilder.com/', tags: ['AI', 'Pratik'] },
            { name: 'CVdone', desc: 'Türkçe CV hazırlama ve hızlı dışa aktarma için pratik çözüm.', href: 'https://cvdone.com/eng/', tags: ['TR', 'Pratik'] },
            { name: 'HyperWrite AI', desc: 'Kapak yazısı, kısa özet ve yazım desteği için genel amaçlı AI araç.', href: 'https://www.hyperwriteai.com/', tags: ['AI', 'Pratik'] },
            { name: 'BARBRI', desc: 'Pre-law, law school ve professional legal education ile kariyer hazırlığına da eşlik eder.', href: 'https://www.barbri.com/', tags: ['US', 'Pratik'] }
          ]
        },
        {
          id: 'internship-jobs',
          title: '5.2 Staj & İş Platformları',
          description: 'Kamu, baro ve hukuk piyasası odaklı kariyer platformları.',
          tags: ['Staj', 'İş', 'Platform', 'TR'],
          tools: [
            { name: 'Legal.io', desc: 'Hukuk profesyonelleri için iş, freelance ve proje bazlı fırsatlar sunan platformdur.', href: 'https://legal.io', tags: ['US', 'Pratik'] },
            { name: 'LawCrossing', desc: 'Hukuk alanına özel iş ilanlarını toplayan kariyer platformudur.', href: 'https://www.lawcrossing.com', tags: ['US', 'Pratik'] },
            { name: 'UpCounsel', desc: 'Bağımsız hukuk hizmetleri ve danışmanlık fırsatlarına erişim sağlayan pazaryeridir.', href: 'https://www.upcounsel.com', tags: ['US', 'Pratik'] },
            { name: 'Axiom Law', desc: 'Esnek hukuk işi ve kurumsal hukuk hizmetleri tarafında öne çıkan platformdur.', href: 'https://www.axiomlaw.com', tags: ['US', 'Pratik'] },
            { name: 'Kariyer Kapısı', desc: 'Kamu iş ve staj duyuruları için resmi Türkiye platformu.', href: 'https://kariyerkapisi.gov.tr/', tags: ['TR', 'Pratik'] },
            { name: 'TBB İlan Panosu', desc: 'Barolar ve hukuk ofisleri tarafındaki ilanları takip etmek için kullanılır.', href: 'https://ilanpanosu.barobirlik.org.tr/', tags: ['TR', 'Pratik'] },
            { name: 'Darrow', desc: 'Plaintiff-side litigation intelligence odaklı modern legaltech şirketi.', href: 'https://www.darrow.ai/', tags: ['AI', 'US', 'Pratik'] },
            { name: 'Legora Scholars Program', desc: 'AI-driven legal practice için hukuk öğrencilerine özel gelişim programı sunar.', href: 'https://legora.com/newsroom/legora-announces-launch-of-legal-ai-scholars-program-to-prepare-law-students-for-ai-driven-legal-practice', tags: ['AI', 'US', 'Pratik'] }
          ]
        },
        {
          id: 'moot-tools',
          title: '5.3 Moot Court / Competition Tools',
          description: 'Moot court, uluslararası hukuk yarışmaları ve competition hazırlığı için yararlı kaynaklar.',
          tags: ['Moot', 'Competition', 'Uluslararası hukuk'],
          tools: [
            { name: 'ILSA Resources', desc: 'Jessup ve uluslararası hukuk topluluğu çevresindeki kaynaklar için güçlü giriş noktası.', href: 'https://www.ilsa.org/ilsa/', tags: ['Moot', 'Akademik', 'Pratik'] },
            { name: 'Jessup', desc: 'Dünyanın en büyük uluslararası hukuk moot court yarışmasının resmi merkezi.', href: 'https://www.ilsa.org/jessuphome', tags: ['Moot', 'Akademik', 'Pratik'] },
            { name: 'Vis Moot', desc: 'Uluslararası ticari tahkim alanında en prestijli moot yarışmalarından biridir.', href: 'https://www.vismoot.org/', tags: ['Moot', 'Akademik', 'Pratik'] },
            { name: 'Moot Court Coach', desc: 'Moot court hazırlığı, koçluk ve yarışma pratiği için odaklı yardımcı platformdur.', href: 'https://mootcourtcoach.com', tags: ['Moot', 'Pratik'] },
            { name: 'Moot Alumni Association', desc: 'Vis Moot çevresindeki ağ, etkinlik ve profesyonel bağlantılar için yararlıdır.', href: 'https://maa.net/', tags: ['Moot', 'Pratik'] },
            { name: 'LAWASIA Moot Competition', desc: 'Asya-Pasifik bölgesinde uzun süredir devam eden uluslararası moot yarışmasıdır.', href: 'https://lawasiamoot.org/', tags: ['Moot', 'Pratik'] },
            { name: 'Google Scholar', desc: 'Moot memorial veya araştırma notları için akademik arka plan oluşturur.', href: 'https://scholar.google.com', tags: ['Akademik', 'Moot'] },
            { name: 'HeinOnline', desc: 'Uluslararası hukuk ve law review araştırmaları için moot hazırlığında çok değerlidir.', href: 'https://home.heinonline.org/', tags: ['Akademik', 'Moot'] }
          ]
        }
      ]
    }
  ];

  const library = document.getElementById('library');
  const searchInput = document.getElementById('searchInput');
  const categoryFilter = document.getElementById('categoryFilter');
  const tagFilter = document.getElementById('tagFilter');
  const subFilter = document.getElementById('subFilter');
  const emptyState = document.getElementById('emptyState');
  const toolCount = document.getElementById('toolCount');

  const allTools = categories.flatMap(category =>
    category.sections.flatMap(section =>
      section.tools.map(tool => ({ ...tool, categoryId: category.id, sectionId: section.id }))
    )
  );
  toolCount.textContent = String(allTools.length);

  function fillSelects() {
    categories.forEach(category => {
      const option = document.createElement('option');
      option.value = category.id;
      option.textContent = category.title.replace(/^\d+\.\sAna Kategori:\s/i, '');
      categoryFilter.appendChild(option);
    });

    categories.forEach(category => {
      category.sections.forEach(section => {
        const option = document.createElement('option');
        option.value = section.id;
        option.textContent = section.title.replace(/^\d+\.\d+\s/i, '');
        subFilter.appendChild(option);
      });
    });
  }

  function cardIcon(tags) {
    if (tags.includes('Moot')) return '⚖';
    if (tags.includes('TR')) return 'TR';
    if (tags.includes('AI')) return 'AI';
    if (tags.includes('Akademik')) return '∑';
    return '↗';
  }

  function renderLibrary() {
    library.innerHTML = categories.map(category => `
      <section class="main-category" id="${category.anchor}" data-category="${category.id}">
        <div class="main-head">
          <div class="main-head-left">
            <h2>${category.title}</h2>
            <p>${category.description}</p>
          </div>
          <div class="main-meta">
            ${category.meta.map(meta => `<span class="meta-pill">${meta}</span>`).join('')}
          </div>
        </div>
        <div class="sub-grid">
          ${category.sections.map(section => `
            <article class="subsection" data-subcategory="${section.id}">
              <div class="sub-head">
                <div class="sub-head-top">
                  <h3>${section.title}</h3>
                  <div class="tag-row">
                    ${section.tags.map((tag, index) => `<span class="tag ${index === 0 ? 'tag-soft' : index === 1 ? 'tag-green' : 'tag-silver'}">${tag}</span>`).join('')}
                  </div>
                </div>
                <p>${section.description}</p>
              </div>
              <div class="tools-grid">
                ${section.tools.map(tool => `
                  <a
                    class="tool-card"
                    href="${tool.href}"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-category="${category.id}"
                    data-subcategory="${section.id}"
                    data-search="${[tool.name, tool.desc, category.title, section.title, tool.tags.join(' ')].join(' ').toLowerCase()}"
                    data-tags="${tool.tags.join('|')}"
                  >
                    <div class="tool-top">
                      <h4>${tool.name}</h4>
                      <div class="tool-icon">${cardIcon(tool.tags)}</div>
                    </div>
                    <p>${tool.desc}</p>
                    <div class="tool-meta">
                      ${tool.tags.map(tag => `<span class="mini-tag">${tag}</span>`).join('')}
                    </div>
                    <span class="tool-link">Siteye Git →</span>
                  </a>
                `).join('')}
              </div>
            </article>
          `).join('')}
        </div>
      </section>
    `).join('');
  }

  function applyFilters() {
    const term = searchInput.value.trim().toLowerCase();
    const categoryValue = categoryFilter.value;
    const tagValue = tagFilter.value;
    const subValue = subFilter.value;

    let visibleToolCount = 0;

    document.querySelectorAll('.tool-card').forEach(card => {
      const cardTags = card.dataset.tags.split('|');
      const matchesSearch = !term || card.dataset.search.includes(term);
      const matchesCategory = categoryValue === 'all' || card.dataset.category === categoryValue;
      const matchesTag = tagValue === 'all' || cardTags.includes(tagValue);
      const matchesSub = subValue === 'all' || card.dataset.subcategory === subValue;
      const visible = matchesSearch && matchesCategory && matchesTag && matchesSub;
      card.style.display = visible ? '' : 'none';
      if (visible) visibleToolCount += 1;
    });

    document.querySelectorAll('.subsection').forEach(section => {
      const hasVisibleCards = [...section.querySelectorAll('.tool-card')].some(card => card.style.display !== 'none');
      section.style.display = hasVisibleCards ? '' : 'none';
    });

    document.querySelectorAll('.main-category').forEach(category => {
      const hasVisibleSections = [...category.querySelectorAll('.subsection')].some(section => section.style.display !== 'none');
      category.style.display = hasVisibleSections ? '' : 'none';
    });

    emptyState.style.display = visibleToolCount === 0 ? 'block' : 'none';
  }

  fillSelects();
  renderLibrary();
  applyFilters();

  [searchInput, categoryFilter, tagFilter, subFilter].forEach(element => {
    element.addEventListener('input', applyFilters);
    element.addEventListener('change', applyFilters);
  });

  /* ── AI Asistan Paneli ── */
  const aiTrigger = document.getElementById('aiTrigger');
  const aiPanel = document.getElementById('aiPanel');
  const aiMessages = document.getElementById('aiMessages');
  const aiInput = document.getElementById('aiInput');
  const aiSend = document.getElementById('aiSend');

  let panelOpen = false;
  let isTyping = false;

  // Araç veritabanını hazırla
  const toolDatabase = allTools.map(t => ({
    name: t.name,
    desc: t.desc,
    href: t.href,
    tags: t.tags,
    categoryId: t.categoryId,
    sectionId: t.sectionId
  }));

  const intentRules = [
    { keywords: ['içtihat', 'ictihat', 'karar', 'dava', 'mahkeme', 'araştırma', 'arastirma', 'yargıtay', 'anayasa'], categories: ['research'], sections: ['case-law'] },
    { keywords: ['kaynak', 'makale', 'kitap', 'atıf', 'atif', 'scholar', 'heinonline', 'jstor', 'ssrn', 'mevzuat'], categories: ['research'], sections: ['source-finding'] },
    { keywords: ['sözleşme', 'sozlesme', 'dilekçe', 'dilekce', 'draft', 'kontrat', 'hukuki metin'], categories: ['writing'], sections: ['legal-writing'] },
    { keywords: ['özet', 'ozet', 'analiz', 'pdf', 'inceleme', 'case brief'], categories: ['writing'], sections: ['summary-analysis'] },
    { keywords: ['soru', 'quiz', 'test', 'mcq'], categories: ['learning'], sections: ['question-generation'] },
    { keywords: ['sınav', 'sinav', 'flashcard', 'anki', 'bar', 'pratik'], categories: ['learning'], sections: ['exam-prep'] },
    { keywords: ['konu', 'anlama', 'eli5', 'basitleştir', 'basitlestir', 'açıkla', 'acikla'], categories: ['learning'], sections: ['concept-tools'] },
    { keywords: ['not', 'notion', 'obsidian', 'remnote', 'capacities'], categories: ['organization'], sections: ['note-taking'] },
    { keywords: ['pdf yönetimi', 'pdf yonetimi', 'kaynak yönetimi', 'kaynak yonetimi', 'zotero', 'mendeley', 'liquidtext'], categories: ['organization'], sections: ['file-management'] },
    { keywords: ['zaman', 'takvim', 'pomodoro', 'toggl', 'clockify', 'motion', 'deadline'], categories: ['organization'], sections: ['time-management'] },
    { keywords: ['cv', 'özgeçmiş', 'ozgecmis', 'resume'], categories: ['career'], sections: ['cv-tools'] },
    { keywords: ['iş', 'is', 'staj', 'kariyer', 'job', 'internship'], categories: ['career'], sections: ['internship-jobs'] },
    { keywords: ['moot', 'jessup', 'vis moot', 'competition'], categories: ['career'], sections: ['moot-tools'] }
  ];

  function normalizeText(text) {
    return String(text || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  function scoreTool(tool, query) {
    const q = normalizeText(query);
    const haystack = normalizeText([tool.name, tool.desc, tool.tags.join(' '), tool.categoryId, tool.sectionId].join(' '));
    let score = 0;

    q.split(/\s+/).filter(Boolean).forEach(word => {
      if (word.length < 2) return;
      if (haystack.includes(word)) score += tool.name.toLowerCase().includes(word) ? 6 : 2;
    });

    intentRules.forEach(rule => {
      if (rule.keywords.some(keyword => q.includes(normalizeText(keyword)))) {
        if (rule.categories.includes(tool.categoryId)) score += 6;
        if (rule.sections.includes(tool.sectionId)) score += 8;
      }
    });

    ['ai', 'tr', 'us', 'eu', 'akademik', 'pratik', 'moot'].forEach(tag => {
      if (q.includes(tag) && tool.tags.map(t => t.toLowerCase()).includes(tag)) score += 4;
    });

    return score;
  }

  function getRecommendations(query) {
    const tools = toolDatabase
      .map(tool => ({ tool, score: scoreTool(tool, query) }))
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score || a.tool.name.localeCompare(b.tool.name, 'tr'))
      .slice(0, 5)
      .map(item => item.tool);

    const q = normalizeText(query);
    let answer = 'İsteğine en yakın legaltech araçlarını aşağıda topladım.';
    if (!tools.length) answer = 'Buna tam uyan araç bulamadım. Daha net bir ihtiyaç yazarsan uygun kategori ve araçları önerebilirim.';
    else if (q.includes('moot')) answer = 'Moot court ve yarışma hazırlığı için en ilgili araçlar bunlar.';
    else if (q.includes('staj') || q.includes('kariyer') || q.includes('iş') || q.includes('is')) answer = 'Kariyer ve fırsat odaklı en uygun araçları seçtim.';
    else if (q.includes('sozlesme') || q.includes('sözleşme') || q.includes('dilekce') || q.includes('dilekçe') || q.includes('draft')) answer = 'Sözleşme drafting ve hukuki metin üretimi için en uygun araçlar bunlar.';
    else if (q.includes('ictihat') || q.includes('içtihat') || q.includes('karar') || q.includes('arastirma') || q.includes('araştırma')) answer = 'İçtihat ve hukuki araştırma için en alakalı araçları seçtim.';

    return { answer, tools };
  }

  function addMessage(role, content, tools) {
    const msgEl = document.createElement('div');
    msgEl.className = `ai-msg ${role}`;

    const avatarEl = document.createElement('div');
    avatarEl.className = 'ai-msg-avatar';
    avatarEl.textContent = role === 'bot' ? '⚖' : 'SEN';

    const bubbleEl = document.createElement('div');
    bubbleEl.className = 'ai-msg-bubble';
    bubbleEl.innerHTML = content.replace(/\n/g, '<br>');

    if (tools && tools.length > 0) {
      const toolsContainer = document.createElement('div');
      toolsContainer.style.marginTop = '10px';
      toolsContainer.style.display = 'flex';
      toolsContainer.style.flexDirection = 'column';
      toolsContainer.style.gap = '6px';

      tools.slice(0, 5).forEach(tool => {
        const cardEl = document.createElement('a');
        cardEl.className = 'ai-tool-card';
        cardEl.href = tool.href;
        cardEl.target = '_blank';
        cardEl.rel = 'noopener noreferrer';

        const iconEl = document.createElement('div');
        iconEl.className = 'ai-tool-card-icon';
        iconEl.textContent = tool.tags.includes('AI') ? 'AI' : tool.tags.includes('TR') ? 'TR' : '↗';

        const infoEl = document.createElement('div');
        infoEl.className = 'ai-tool-card-info';
        infoEl.innerHTML = `<strong>${tool.name}</strong><span>${tool.desc.substring(0, 70)}${tool.desc.length > 70 ? '…' : ''}</span>`;

        cardEl.appendChild(iconEl);
        cardEl.appendChild(infoEl);
        toolsContainer.appendChild(cardEl);
      });

      bubbleEl.appendChild(toolsContainer);
    }

    msgEl.appendChild(avatarEl);
    msgEl.appendChild(bubbleEl);
    aiMessages.appendChild(msgEl);
    aiMessages.scrollTop = aiMessages.scrollHeight;
  }

  function addChips(chips) {
    const chipsEl = document.createElement('div');
    chipsEl.className = 'ai-chip-row';
    chips.forEach(chip => {
      const chipEl = document.createElement('button');
      chipEl.className = 'ai-chip';
      chipEl.textContent = chip;
      chipEl.addEventListener('click', () => {
        aiInput.value = chip;
        handleSend();
      });
      chipsEl.appendChild(chipEl);
    });
    aiMessages.appendChild(chipsEl);
    aiMessages.scrollTop = aiMessages.scrollHeight;
  }

  function showTyping() {
    const typingEl = document.createElement('div');
    typingEl.className = 'ai-msg bot';
    typingEl.id = 'aiTyping';

    const avatarEl = document.createElement('div');
    avatarEl.className = 'ai-msg-avatar';
    avatarEl.textContent = '⚖';

    const dotsEl = document.createElement('div');
    dotsEl.className = 'ai-typing';
    dotsEl.innerHTML = '<span></span><span></span><span></span>';

    typingEl.appendChild(avatarEl);
    typingEl.appendChild(dotsEl);
    aiMessages.appendChild(typingEl);
    aiMessages.scrollTop = aiMessages.scrollHeight;
  }

  function hideTyping() {
    const el = document.getElementById('aiTyping');
    if (el) el.remove();
  }

  async function handleSend() {
    const text = aiInput.value.trim();
    if (!text || isTyping) return;

    aiInput.value = '';
    aiInput.style.height = 'auto';
    isTyping = true;
    aiSend.disabled = true;

    addMessage('user', text);
    showTyping();

    try {
      await new Promise(resolve => window.setTimeout(resolve, 320));
      hideTyping();
      const result = getRecommendations(text);
      addMessage('bot', result.answer, result.tools);

    } catch (err) {
      hideTyping();
      addMessage('bot', 'Şu an öneri üretirken küçük bir sorun oldu. Sorunu daha kısa yazarak tekrar deneyebilirsin.');
    }

    isTyping = false;
    aiSend.disabled = false;
    aiInput.focus();
  }

  // Toggle panel
  aiTrigger.addEventListener('click', () => {
    panelOpen = !panelOpen;
    aiPanel.classList.toggle('open', panelOpen);
    aiTrigger.textContent = panelOpen ? '✕' : '⚡';
    if (panelOpen) {
      aiInput.focus();
      // Hoşgeldin mesajı (sadece ilk açılışta)
      if (aiMessages.children.length === 0) {
        addMessage('bot', 'Merhaba! 👋 Ben LexAI — LexTrack\'in hukuk asistanıyım.\n\nAraç önerileri, kategori karşılaştırmaları veya belirli bir ihtiyacınız için bana sorabilirsiniz.');
        addChips(['Türkçe AI araçları', 'Sözleşme drafting', 'Moot court kaynakları', 'Kariyer & staj']);
      }
    } else {
      aiTrigger.innerHTML = '⚡<div class="trigger-badge">AI</div>';
    }
  });

  // Enter ile gönder
  aiInput.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  });

  // Auto-resize textarea
  aiInput.addEventListener('input', () => {
    aiInput.style.height = 'auto';
    aiInput.style.height = Math.min(aiInput.scrollHeight, 110) + 'px';
  });

  aiSend.addEventListener('click', handleSend);

const AUTH_DB_KEY = 'lextrack_auth_users';
const AUTH_SESSION_KEY = 'lextrack_auth_session';

function authGet(key) {
  try { return localStorage.getItem(key); } catch { return null; }
}

function authSet(key, value) {
  try { localStorage.setItem(key, value); return true; } catch { return false; }
}

function authRemove(key) {
  try { localStorage.removeItem(key); } catch {}
}

function normalizeEmail(email) {
  return String(email || '').trim().toLowerCase();
}

function getUsers() {
  try { return JSON.parse(authGet(AUTH_DB_KEY) || '[]'); } catch { return []; }
}

function saveUsers(users) {
  authSet(AUTH_DB_KEY, JSON.stringify(users));
}

function setSession(user, remember) {
  const payload = JSON.stringify({ id: user.id, name: user.name, email: user.email });
  try {
    if (remember) localStorage.setItem(AUTH_SESSION_KEY, payload);
    else sessionStorage.setItem(AUTH_SESSION_KEY, payload);
  } catch {
    authSet(AUTH_SESSION_KEY, payload);
  }
}

function getSession() {
  try {
    return JSON.parse(localStorage.getItem(AUTH_SESSION_KEY) || sessionStorage.getItem(AUTH_SESSION_KEY) || 'null');
  } catch {
    try { return JSON.parse(authGet(AUTH_SESSION_KEY) || 'null'); } catch { return null; }
  }
}

function clearSession() {
  authRemove(AUTH_SESSION_KEY);
  try { sessionStorage.removeItem(AUTH_SESSION_KEY); } catch {}
}

function switchTab(tab) {
  document.querySelectorAll('.login-tab').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.login-view').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.login-error, .login-success').forEach(el => {
    el.classList.remove('show');
    el.textContent = '';
  });
  document.getElementById(tab === 'login' ? 'tabLogin' : 'tabRegister').classList.add('active');
  document.getElementById(tab === 'login' ? 'viewLogin' : 'viewRegister').classList.add('active');
}

function showOverlay() {
  const overlay = document.getElementById('loginOverlay');
  if (overlay) overlay.style.display = 'flex';
}

function hideOverlay() {
  const overlay = document.getElementById('loginOverlay');
  if (overlay) overlay.style.display = 'none';
}

function addUserBadge(user) {
  const topnav = document.querySelector('.topnav');
  if (!topnav || document.getElementById('userBadge')) return;
  const badge = document.createElement('div');
  badge.id = 'userBadge';
  badge.className = 'user-badge';
  const initials = (user.name || user.email).split(' ').map(w => w[0]).join('').toUpperCase().slice(0,2);
  badge.innerHTML = `
    <div class="user-badge-avatar">${initials}</div>
    <span class="user-badge-name">${user.name || user.email}</span>
    <button class="user-badge-btn" type="button" onclick="doLogout()">Çıkış</button>
  `;
  topnav.appendChild(badge);
}

function openVerificationDraft(email, token) {
  const verifyUrl = `${location.origin}${location.pathname}#verify=${encodeURIComponent(token)}&email=${encodeURIComponent(email)}`;
  const subject = encodeURIComponent('LexTrack hesap onayı');
  const body = encodeURIComponent(`Merhaba,\n\nLexTrack hesabınızı doğrulamak için aşağıdaki bağlantıyı açın:\n${verifyUrl}\n\nBu yerel HTML sürümünde e-posta taslak olarak hazırlanır.`);
  window.location.href = `mailto:${encodeURIComponent(email)}?subject=${subject}&body=${body}`;
}

function verifyUser(email, token) {
  const users = getUsers();
  const index = users.findIndex(u => u.email === normalizeEmail(email) && u.verificationToken === token);
  if (index === -1) return false;
  users[index].verified = true;
  users[index].verifiedAt = new Date().toISOString();
  saveUsers(users);
  setSession(users[index], true);
  return users[index];
}

function doLogin() {
  const email = normalizeEmail(document.getElementById('loginEmail').value);
  const password = document.getElementById('loginPassword').value;
  const remember = document.getElementById('rememberMe').checked;
  const errEl = document.getElementById('loginError');
  errEl.classList.remove('show');
  errEl.textContent = '';

  const user = getUsers().find(u => u.email === email && u.password === btoa(password));
  if (!user) {
    errEl.textContent = 'E-posta veya şifre hatalı.';
    errEl.classList.add('show');
    return;
  }
  if (!user.verified) {
    errEl.textContent = 'Hesabınız henüz doğrulanmamış. Kayıt sekmesinden onay bağlantısını yeniden açabilirsiniz.';
    errEl.classList.add('show');
    return;
  }

  setSession(user, remember);
  addUserBadge(user);
  hideOverlay();
}

function doRegister() {
  const name = document.getElementById('regName').value.trim();
  const email = normalizeEmail(document.getElementById('regEmail').value);
  const password = document.getElementById('regPassword').value;
  const confirm = document.getElementById('regPasswordConfirm').value;
  const terms = document.getElementById('termsCheck').checked;
  const kvkk = document.getElementById('kvkkCheck').checked;
  const errEl = document.getElementById('registerError');
  const sucEl = document.getElementById('registerSuccess');
  const draftBtn = document.getElementById('openMailDraftBtn');
  const verifyBtn = document.getElementById('verifyNowBtn');
  errEl.classList.remove('show');
  sucEl.classList.remove('show');
  errEl.textContent = '';
  sucEl.textContent = '';
  draftBtn.style.display = 'none';
  verifyBtn.style.display = 'none';

  if (!name || !email || !password || !confirm) {
    errEl.textContent = 'Lütfen tüm alanları doldurun.';
    errEl.classList.add('show');
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errEl.textContent = 'Geçerli bir e-posta adresi girin.';
    errEl.classList.add('show');
    return;
  }
  if (password.length < 8) {
    errEl.textContent = 'Şifre en az 8 karakter olmalıdır.';
    errEl.classList.add('show');
    return;
  }
  if (password !== confirm) {
    errEl.textContent = 'Şifreler eşleşmiyor.';
    errEl.classList.add('show');
    return;
  }
  if (!terms || !kvkk) {
    errEl.textContent = 'Devam etmek için onay kutularını işaretleyin.';
    errEl.classList.add('show');
    return;
  }

  const users = getUsers();
  if (users.some(u => u.email === email)) {
    errEl.textContent = 'Bu e-posta zaten kayıtlı.';
    errEl.classList.add('show');
    return;
  }

  const token = `v_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
  const user = { id: `u_${Date.now()}`, name, email, password: btoa(password), verified: false, verificationToken: token, createdAt: new Date().toISOString() };
  users.push(user);
  saveUsers(users);

  sucEl.textContent = 'Hesap oluşturuldu. Şimdi onay bağlantısını kullanarak e-posta doğrulamasını tamamlayın.';
  sucEl.classList.add('show');
  draftBtn.style.display = 'inline-flex';
  verifyBtn.style.display = 'inline-flex';
  draftBtn.onclick = () => openVerificationDraft(email, token);
  verifyBtn.onclick = () => {
    const verifiedUser = verifyUser(email, token);
    if (verifiedUser) {
      addUserBadge(verifiedUser);
      hideOverlay();
    }
  };
}

function doLogout() {
  clearSession();
  document.getElementById('userBadge')?.remove();
  showOverlay();
  switchTab('login');
}

function applyVerificationFromHash() {
  const hash = location.hash.replace(/^#/, '');
  const params = new URLSearchParams(hash);
  const token = params.get('verify');
  const email = params.get('email');
  if (!token || !email) return;
  const verifiedUser = verifyUser(email, token);
  if (verifiedUser) {
    addUserBadge(verifiedUser);
    hideOverlay();
    history.replaceState(null, '', `${location.pathname}${location.search}`);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  applyVerificationFromHash();
  const session = getSession();
  if (session) {
    const user = getUsers().find(u => u.id === session.id && u.verified);
    if (user) {
      addUserBadge(user);
      hideOverlay();
      return;
    }
  }
  showOverlay();
});
