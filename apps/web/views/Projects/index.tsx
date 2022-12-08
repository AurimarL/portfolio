import Image from 'next/image';
import ImageComingSoon from '../../assets/ImageComingSoon.png';
import Button from '../../components/Button';
import OndandoLogo from '../../assets/OndandoLogo.png';

import github from '../../assets/github.png';

export default function ProjectsSection() {
    const Data = [
        {
            name: 'Soon',
            image: ImageComingSoon,
            link: 'aurimarlopes.com',
            gitlink: 'aurimarlopes.com',
        },
        {
            name: 'Ondando',
            image: OndandoLogo,
            link: 'github.com/Ondando',
            gitlink: 'github.com/Ondando',
        },
        {
            name: 'Brevemente',
            image: ImageComingSoon,
            link: 'aurimarlopes.com',
            gitlink: 'aurimarlopes.com',
        },
    ];
    return (
        <>
            <div className="md:flex md:flex-row ">
                {Data.map((projeto, i) => {
                    return (
                        <div
                            key={i}
                            className=" md:h-fill m-2  rounded-lg border-2 bg-blue-400 md:w-[500px]"
                        >
                            <Image
                                layout={'responsive'}
                                alt={projeto.name}
                                src={projeto.image ? projeto.image : ImageComingSoon}
                                className="rounded-md rounded-b-3xl"
                            />
                            <div className="flex flex-row justify-between border-t-2">
                                <div className="m-2">
                                    <h3>{projeto.name}</h3>
                                    <Image
                                        src={github}
                                        height={50}
                                        width={50}
                                        layout={'fixed'}
                                        alt={''}
                                    />
                                </div>
                                <div>
                                    <Button PlaceHolder="Live" />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
