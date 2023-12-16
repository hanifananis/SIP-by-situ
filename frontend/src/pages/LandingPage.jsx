import { Flex } from '@chakra-ui/react'
import { Suspense, lazy, useState } from 'react';
import Loading from '../components/Loading';

const HeroPreview = lazy(() => import('../pages/Home/Hero'));
const PartaiPreview = lazy(() => import('../pages/Home/PartaiCards'));
const PelajariPemiluPreview = lazy(() => import('../pages/Home/PelajariPemilu'));
const CandidatesSlotPreview = lazy(() => import('../pages/Home/CandidatesSlot'));
const FlashbackPreview = lazy(() => import('../pages/Home/Flashback'));

const LandingPage = () => {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  };

  return (
    <Flex
      flexDirection={'column'}
      marginY={16}
      gap={14}
    >
      <Suspense fallback={<Loading type={'spin'} color={'#4F7B58'} />}>
          <HeroPreview onLoad={handleLoadingComplete} />
          <PartaiPreview onLoad={handleLoadingComplete} />
          <PelajariPemiluPreview onLoad={handleLoadingComplete} />
          <CandidatesSlotPreview onLoad={handleLoadingComplete} />
          <FlashbackPreview onLoad={handleLoadingComplete} />
      </Suspense>
    </Flex>
  )
}

export default LandingPage