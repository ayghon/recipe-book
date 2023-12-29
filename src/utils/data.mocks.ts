import { MeasurementUnit, Recipe } from '@types';

export const recipesMocks: Recipe[] = [
  {
    id: '1',
    image: 'https://i.nefisyemektarifleri.com/2023/12/26/airfryer-yogurtlu-sebze-mezesi.jpg',
    ingredients: [
      {
        items: [
          { countStart: 1, measureUnit: MeasurementUnit.Piece, name: 'kabak' },
          { countStart: 1, measureUnit: MeasurementUnit.Piece, name: 'patates' },
          { countStart: 1, measureUnit: MeasurementUnit.Piece, name: 'havuç' },
          { countStart: 1, measureUnit: MeasurementUnit.Piece, name: 'yeşil biber' },
          { countStart: 1, measureUnit: MeasurementUnit.Piece, name: 'kırmızı biber' },
          { countEnd: 4, countStart: 3, measureUnit: MeasurementUnit.Piece, name: 'sarımsak' },
        ],
      },
      {
        items: [
          {
            countEnd: 4,
            countStart: 3,
            measureUnit: MeasurementUnit.CoffeeSpoon,
            name: 'zeytinyağı',
          },
          { countStart: 1, measureUnit: MeasurementUnit.CoffeeSpoon, name: 'domates salçası' },
          { countStart: 1, measureUnit: MeasurementUnit.CoffeeSpoon, name: 'kekik' },
          { countStart: 1, measureUnit: MeasurementUnit.TeaSpoon, name: 'tuz' },
        ],
        title: 'Sosu için',
      },
      {
        items: [{ countStart: 1, measureUnit: MeasurementUnit.AsNeeded, name: 'Süzme yoğurt' }],
        title: 'Servis için',
      },
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
          { countStart: 2, measureUnit: MeasurementUnit.Piece, name: 'yumurta' },
          { countStart: 1, measureUnit: MeasurementUnit.TeaSpoon, name: 'şeker' },
          { countStart: 0.5, measureUnit: MeasurementUnit.TeaSpoon, name: 'sıvı yağ' },
          { countStart: 0.5, measureUnit: MeasurementUnit.TeaSpoon, name: 'portakal suyu' },
          { countStart: 1, measureUnit: MeasurementUnit.AsNeeded, name: 'portakal kabuğu rendesi' },
          {
            comment: 'Renk versin diye kullandım yoksa kullanmak zorunda değilsiniz',
            countStart: 1,
            isOptional: true,
            measureUnit: MeasurementUnit.TeaSpoon,
            name: 'zerdeçal',
          },
          { countEnd: 4, countStart: 3.5, measureUnit: MeasurementUnit.Glass, name: 'un' },
          { countStart: 1, measureUnit: MeasurementUnit.Piece, name: 'kabartma tozu' },
        ],
      },
      {
        items: [
          {
            countStart: 4,
            measureUnit: MeasurementUnit.TableSpoon,
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
