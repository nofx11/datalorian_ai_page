// Przekierowanie Next.js z / na /pl
export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/pl',
      permanent: false,
    },
  };
}

export default function Home() {
  return null;
} 