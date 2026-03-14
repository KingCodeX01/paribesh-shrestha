import {
    ImageComparison,
    ImageComparisonImage,
    ImageComparisonSlider,
} from '@/components/motion-primitives/image-comparison';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function About() {
    return (
        <div className='w-full bg-slate-950'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16'>
                <SectionHeader title="About Me" subtitle="01" />

                <div className='mt-8 sm:mt-10'>
                    <ImageComparison
                        className='w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-lg border border-zinc-200 dark:border-zinc-800'
                        enableHover
                    >
                        <ImageComparisonImage
                            src='/images/Paribesh-Shrestha-About-Me.png'
                            alt='Paribesh Shrestha'
                            position='left'
                        />
                        <ImageComparisonImage
                            src='/images/Paribesh-Shrestha-About-Me-2.png'
                            alt='Paribesh Shrestha'
                            position='right'
                        />
                        <ImageComparisonSlider className='bg-white' />
                    </ImageComparison>
                </div>
            </div>
        </div>
    );
}