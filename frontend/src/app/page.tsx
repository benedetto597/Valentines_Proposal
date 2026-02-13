import NewspaperPage from '@/components/NewspaperPage';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

// Lista de imágenes disponibles en la carpeta public/images
const IMAGE_FILES = [
  '01-nuestra-primer-navidad-2025.jpeg',
  '02-nuestra-primer-navidad-juntos.jpeg',
  '03-primer-lasania-2025.jpeg',
  '04-ultima-lasania-2025.jpeg',
  '05-cita-nativo.jpeg',
  '06-primer-boda.jpeg',
  '07-ultima-cita-2025.jpeg',
  '08-playlandpark.jpeg',
  '09-precesuelos.jpeg',
  '10-sunset.jpeg',
  '11-primer-lasania-2025.jpeg',
  '12-cita-furiwa.jpeg',
  '13-pico.jpeg',
  '14-de-compras.jpeg',
];

async function getValentineData() {
  try {
    const res = await fetch(`${API_URL}/api/valentine/message`, {
      cache: 'no-store'
    });
    if (!res.ok) throw new Error('Failed to fetch message');
    return res.json();
  } catch (error) {
    console.error('Error fetching valentine data:', error);
    return {
      title: "WILL YOU BE MY",
      subtitle: "Forever Valentine?",
      heading: "THE DAY I CHOOSE YOU",
      message: "Error loading message. Please check backend connection.",
      footer: "YOU + ME = Destiny !",
      date: new Date().toLocaleDateString('es-ES')
    };
  }
}

export default async function Home() {
  const valentineData = await getValentineData();

  return (
    <main>
      <NewspaperPage 
        valentineData={valentineData} 
        images={IMAGE_FILES}
      />
    </main>
  );
}
