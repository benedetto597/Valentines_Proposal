import NewspaperPage from '@/components/NewspaperPage';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

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

async function getImages() {
  try {
    const res = await fetch(`${API_URL}/api/valentine/images`, {
      cache: 'no-store'
    });
    if (!res.ok) throw new Error('Failed to fetch images');
    const data = await res.json();
    return data.images || [];
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
}

export default async function Home() {
  const [valentineData, images] = await Promise.all([
    getValentineData(),
    getImages()
  ]);

  return (
    <main>
      <NewspaperPage 
        valentineData={valentineData} 
        images={images}
        apiUrl={API_URL}
      />
    </main>
  );
}
