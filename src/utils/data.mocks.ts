import { Recipe } from '@types';

export const recipesMocks: Recipe[] = [
  {
    id: '1',
    image: 'https://i.nefisyemektarifleri.com/2023/12/26/airfryer-yogurtlu-sebze-mezesi.jpg',
    ingredients: [
      {
        items: [
          { count: 1, measureUnit: 'piece', name: 'kabak' },
          { count: 1, measureUnit: 'piece', name: 'patates' },
          { count: 1, measureUnit: 'piece', name: 'havuç' },
          { count: 1, measureUnit: 'piece', name: 'yeşil biber' },
          { count: 1, measureUnit: 'piece', name: 'kırmızı biber' },
          { countEnd: 4, countStart: 3, measureUnit: 'piece', name: 'sarımsak' },
        ],
      },
      {
        items: [
          { countEnd: 4, countStart: 3, measureUnit: 'table-spoon', name: 'zeytinyağı' },
          { count: 1, measureUnit: 'coffee-spoon', name: 'domates salçası' },
          { count: 1, measureUnit: 'coffee-spoon', name: 'kekik' },
          { count: 1, measureUnit: 'tea-spoon', name: 'tuz' },
        ],
        title: 'Sosu için',
      },
      { items: [{ measureUnit: 'as-needed', name: 'Süzme yoğurt' }], title: 'Servis için' },
    ],
    steps: [
      {
        explanation:
          'Sosu için derince bir kaseye zeytinyağı, kekik, tuz ve domates salçasını alarak karıştıralım.',
      },
      {
        explanation:
          'Patates, kabak, havuç, yeşil biber ve kırmızı biberi jülyen olacak şekilde dilimleyelim.',
      },
      {
        explanation:
          'Hazırladığımız sosa sebzelerimizi ve doğradığımız sarımsağı ekleyerek güzelce karıştıralım.',
      },
      {
        explanation: 'Airfryer haznesine sosladığımız sebzeleri sırasıyla yerleştirelim.',
      },
      {
        explanation: 'Sebzelerimizi 160 °C’de 15 dakika pişirelim.',
      },
      {
        explanation: 'Süzme yoğurdu çırpalım ve servis tabağına alarak yayalım.',
      },
      {
        explanation:
          'Güzelce pişip kızaran sebzelerimizi de yoğurdun üzerine yerleştirelim ve servis edelim. Afiyet olsun!',
      },
    ],
    title: 'Airfryer Yoğurtlu Sebze Mezesi Tarifi İçin Malzemeler',
  },
  {
    id: '2',
    image:
      'https://i.nefisyemektarifleri.com/2023/12/27/siviyagli-portakalli-catlak-kurabiyevideolu.jpg',
    ingredients: [
      {
        items: [
          { count: 2, measureUnit: 'piece', name: 'yumurta' },
          { count: 1, measureUnit: 'tea-spoon', name: 'şeker' },
          { count: 0.5, measureUnit: 'tea-spoon', name: 'sıvı yağ' },
          { count: 0.5, measureUnit: 'tea-spoon', name: 'portakal suyu' },
          { count: 1, measureUnit: 'as-needed', name: 'portakal kabuğu rendesi' },
          {
            comment: 'Renk versin diye kullandım yoksa kullanmak zorunda değilsiniz',
            count: 1,
            isOptional: true,
            measureUnit: 'tea-spoon',
            name: 'zerdeçal',
          },
          { countEnd: 4, countStart: 3.5, measureUnit: 'glass', name: 'un' },
          { count: 1, measureUnit: 'piece', name: 'kabartma tozu' },
        ],
      },
      {
        items: [
          {
            count: 4,
            measureUnit: 'table-spoon',
            name: 'pudra şekeri',
          },
        ],
        title: 'Bulamak için',
      },
    ],
    steps: [
      {
        explanation:
          'Yumurta ve şekeri karıştırın. İçerisine sıvı yağ, portakal suyu, portakal kabuğu rendesi (ince tarafıyla rendeledim), zerdeçalı da ekleyip karıştırın.',
      },
      {
        explanation:
          '3 su bardağı un ve kabartma tozunu ilave edip yoğurun. Kıvamına göre un ilave ederek yoğurmaya devam edin.',
      },
      { explanation: 'Ele yapışan çok yumuşak bir hamur olacak videodan kıvamını görebilirsiniz.' },
      {
        explanation:
          'Kaşıkla hamurdan cevizden biraz daha büyük parçalar koparıp yuvarlayın ( yapışırsa elinizi hafif yağlayıp şekil verin) pudra şekerine bulayıp tepsiye dizin.',
      },
      { explanation: 'En son tüm kurabiyeleri ikinci kez pudra şekerine bulayın.' },
      {
        explanation:
          'Önceden ısıtılmış 180 derece fırında yaklaşık 20 dakika pişirin. Kontrollü pişirin kızarmasınlar. Çok pişerse sertleşirler.',
      },
    ],
    title: 'Sıvıyağlı Portakallı Çatlak Kurabiye',
  },
];
