import Image from 'next/image';
import amazon from '@/public/companies/Amazon.svg';
import github from '@/public/companies/GitHub.svg';
import google from '@/public/companies/Google.svg';
import microsoft from '@/public/companies/Microsoft.svg';
import notion from '@/public/companies/Notion.svg';
import uber from '@/public/companies/Uber.svg';

export default function ClientSection() {
	return (
		<section id='clients' className='text-center mx-auto max-w-[80rem] px-6 md:px-8'>
			<div className='py-14'>
				<div className='mx-auto max-w-screen-xl px-4 md:px-8'>
					<h2 className='text-center text-sm font-semibold text-gray-600'>
						TRUSTED BY TEAMS FROM AROUND THE WORLD
					</h2>
					<div className='mt-6'>
						<ul className='flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16 [&_path]:fill-white'>
							<li>
								<Image
									src={google}
									className='h-8 w-28 px-2 dark:brightness-0 dark:invert'
									width={112}
									height={32}
									alt='Google'
								/>
							</li>
							<li>
								<Image
									src={microsoft}
									className='h-8 w-28 px-2 dark:brightness-0 dark:invert'
									width={112}
									height={32}
									alt='Microsoft'
								/>
							</li>
							<li>
								<Image
									src={amazon}
									className='h-8 w-28 px-2 dark:brightness-0 dark:invert'
									width={112}
									height={32}
									alt='Amazon'
								/>
							</li>
							<li>
								<Image
									src={github}
									className='h-8 w-28 px-2 dark:brightness-0 dark:invert'
									width={112}
									height={32}
									alt='GitHub'
								/>
							</li>
							<li>
								<Image
									src={uber}
									className='h-8 w-28 px-2 dark:brightness-0 dark:invert'
									width={112}
									height={32}
									alt='Uber'
								/>
							</li>
							<li>
								<Image
									src={notion}
									className='h-8 w-28 px-2 dark:brightness-0 dark:invert'
									width={112}
									height={32}
									alt='Notion'
								/>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
