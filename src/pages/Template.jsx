import React, { useState, useEffect } from 'react'
import HappyMen from "../assets/HappyMenWebsite.png"
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from "react-scroll";

const Template = () => {

    const [activeSection, setActiveSection] = useState(null);

    const sections = [
        { id: "1" },
        { id: "2" },
        { id: "3" },
        { id: "4" },
        { id: "5" },
        { id: "6" },
        { id: "7" },
    ]
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.3,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        sections.forEach(({ id }) => {
            const section = document.getElementById(id);
            if (section) observer.observe(section);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    const [visible, setVisible] = useState(false);

    return (
        <div>
            <div className='width-full bg-[#6abca533] pt-10 md:pt-20 rounded-b-3xl '>
                <div className=' flex flex-col md:flex-row gap-4 p-4 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] mt-10'>
                    <div className='md:mb-[-80px]'>
                        <img src={HappyMen} alt="happy men with a Laptop" className='rounded-2xl' />
                    </div>
                    <div className='ml-4'>
                        <h1 className='font-semibold text-5xl mb-4'>Websites für KMU´s: <span className='font-light italic'>Erfolgreich im Internet</span></h1>
                        <p className='mb-6'>Higher education inventory management is an essential piece of higher education IT solutions. Discover the ins and outs today.</p>
                        <p className='text-black-900'>26. Jänner 2025</p>
                    </div>
                </div>
            </div>


            <div className='p-4 px-4 sm:px-[3vw] md:px-[4vw] lg:px-[6vw] mt-4 md:mt-20 flex flex-col md:flex-row gap-4'>
                <button onClick={() => setVisible(!visible)} className='md:hidden mt-4 mb-4 text-[#6abca5] rounded-lg border-[2px] p-4 border-[#6abca5] hover:bg-[#6abca5] hover:text-white transition'>
                    <i className="fa fa-table" aria-hidden="true"></i>  Inhalte
                </button>
                {/* Table for mobile devices */}
                {
                    visible && (
                        <ol className='md:hidden'>
                            <ScrollLink to={1} smooth={true}>
                                <li className='p-3 bg-black-400 border-l-4 border-black-800 hover:border-[#6abca5] hover:text-[#6abca5] hover:underline transition'>Einleitung</li>
                            </ScrollLink>
                            <ScrollLink to={2} smooth={true}>
                                <li className='p-3 bg-black-400 border-l-4 border-black-800 hover:border-[#6abca5] hover:text-[#6abca5] hover:underline transition'>Bedeutung einer Website für KMU´s</li>
                            </ScrollLink>
                            <ScrollLink to={3} smooth={true}>
                                <li className='p-3 bg-black-400 border-l-4 border-black-800 hover:border-[#6abca5] hover:text-[#6abca5] hover:underline transition'>Vorteile einer modernen Website</li>
                            </ScrollLink>
                            <ScrollLink to={4} smooth={true}>
                                <li className='p-3 bg-black-400 border-l-4 border-black-800 hover:border-[#6abca5] hover:text-[#6abca5] hover:underline transition'>Herausforderungen für Kleinunternehmer ohne Website</li>
                            </ScrollLink>
                            <ScrollLink to={5} smooth={true}>
                                <li className='p-3 bg-black-400 border-l-4 border-black-800 hover:border-[#6abca5] hover:text-[#6abca5] hover:underline transition'>Wie Webaffinity KMUs zum Erfolg verhilft</li>
                            </ScrollLink>
                            <ScrollLink to={6} smooth={true}>
                                <li className='p-3 bg-black-400 border-l-4 border-black-800 hover:border-[#6abca5] hover:text-[#6abca5] hover:underline transition'>Tipps für den Start ins Internet</li>
                            </ScrollLink>
                            <ScrollLink to={7} smooth={true}>
                                <li className='p-3 bg-black-400 border-l-4 border-black-800 hover:border-[#6abca5] hover:text-[#6abca5] hover:underline transition'>Fazit</li>
                            </ScrollLink>
                            <div className='relative'></div>                            </ol>
                    )
                }
                <div className='md:w-3/4 p-4'>
                    {/* KI Zusammenfassung */}
                    <div className='flex flex-col md:flex-row gap-4 items-center mb-10'>
                        <p className='font-semibold'>
                            KI-Zusammenfassung erstellen
                        </p>
                        <button className='bg-black text-white rounded-lg border-[2px] p-4 border-black hover:bg-transparent hover:text-black transition'>
                            <i className="fa fa-bolt" aria-hidden="true"></i>  KI-Zusammenfassung
                        </button>
                    </div>
                    {/* ------------ Main Content ------------ */}

                    <div id={1} style={{ position: "relative", top: "-100px" }}></div>
                    <p className='mb-8'>
                        In der heutigen digitalen Welt ist eine professionelle Website für kleine und mittlere Unternehmen (KMUs) unerlässlich. Sie dient nicht nur als Visitenkarte im Internet, sondern ist auch ein mächtiges Werkzeug, um neue Kunden zu gewinnen und bestehende zu binden. Dieser Blogpost zeigt Ihnen, warum eine moderne Website für Ihren Unternehmenserfolg entscheidend ist und wie Webaffinity Sie dabei unterstützen kann.
                    </p>

                    <div id={2} style={{ position: "relative", top: "-100px" }}></div>
                    <h2 className='mb-4 md:text-4xl sm:text-3xl text-2xl font-xl'>Die Bedeutung einer Website für KMUs</h2>
                    <p className='mb-8'>
                        Immer mehr Menschen suchen online nach Produkten und Dienstleistungen. Ohne eine starke Online-Präsenz laufen Kleinunternehmer Gefahr, von potenziellen Kunden übersehen zu werden. Eine aktuelle und ansprechende Website hilft Ihnen, im Internet sichtbar zu sein und sich von der Konkurrenz abzuheben.
                    </p>

                    <div id={3} style={{ position: "relative", top: "-100px" }}></div>
                    <h2 className='mb-4 md:text-4xl sm:text-3xl text-2xl font-xl'>Vorteile einer modernen Website</h2>
                    <h3 className='mb-4 md:text-2xl sm:text-xl text-lg'>1. Sichtbarkeit erhöhen</h3>
                    <p className='mb-6'>
                        Mit einer optimierten Website erscheinen Sie in Suchmaschinen wie Google ganz oben. So finden Kunden Ihr Unternehmen schnell und einfach, wenn sie nach relevanten Keywords suchen.
                    </p>
                    <h3 className='mb-4 md:text-2xl sm:text-xl text-lg'>2. Vertrauensaufbau bei Kunden</h3>
                    <p className='mb-6'>
                        Eine professionelle Website stärkt das Vertrauen Ihrer Kunden. Sie zeigt, dass Sie mit der Zeit gehen und legt den Grundstein für eine langfristige Kundenbeziehung.
                    </p>
                    <h3 className='mb-4 md:text-2xl sm:text-xl text-lg'>3. Wettbewerbsvorteil sichern</h3>
                    <p className='mb-8'>
                        In vielen Branchen haben Wettbewerber noch keine überzeugende Online-Präsenz. Nutzen Sie diese Chance, um sich einen möglichen Vorsprung zu sichern.
                    </p>

                    <div id={4} style={{ position: "relative", top: "-100px" }}></div>
                    <h2 className='mb-4 md:text-4xl sm:text-3xl text-2xl font-xl'> Herausforderungen für Kleinunternehmer ohne Website</h2>
                    <p className='mb-8'>
                        Ohne eigene Website sind Sie abhängig von Mundpropaganda und traditionellen Werbemethoden, die oft weniger effektiv und teurer sind. Zudem wirken Unternehmen ohne Online-Präsenz auf viele Kunden weniger seriös.
                    </p>

                    <div id={5} style={{ position: "relative", top: "-100px" }}></div>
                    <h2 className='mb-4 md:text-4xl sm:text-3xl text-2xl font-xl'>Wie Webaffinity KMUs zum Erfolg verhilft</h2>
                    <h3 className='mb-4 md:text-2xl sm:text-xl text-lg'>1. Individuelle Weblösungen
                    </h3>
                    <p className='mb-6'>
                        Wir von <a href="https://webaffinity.at">Webaffinity</a> erstellen maßgeschneiderte Websites, die perfekt auf die Bedürfnisse von KMUs abgestimmt sind.
                    </p>
                    <h3 className='mb-4 md:text-2xl sm:text-xl text-lg'>2.  Suchmaschinenoptimierung (SEO)</h3>
                    <p className='mb-6'>
                        Wir sorgen dafür, dass Ihre Website bei Google & Co. ganz vorne mit dabei ist, indem wir relevante Keywords und bewährte SEO-Strategien einsetzen.
                    </p>
                    <h3 className='mb-4 md:text-2xl sm:text-xl text-lg'>3. Responsive Design für mobile Endgeräte</h3>
                    <p className='mb-8'>
                        Da immer mehr Menschen mobil surfen, gestalten wir Ihre Website so, dass sie auf Smartphones und Tablets optimal dargestellt wird.
                    </p>

                    <div id={6} style={{ position: "relative", top: "-100px" }}></div>
                    <h2 className='mb-4 md:text-4xl sm:text-3xl text-2xl font-xl'>Tipps für den Start ins Internet</h2>
                    <ul className='mb-8 list-disc ml-4'>
                        <li className='mb-2'>Definieren Sie klare Ziele für Ihre Website.</li>
                        <li className='mb-2'>Setzen Sie auf qualitativ hochwertigen Content, der Ihren Kunden Mehrwert bietet.</li>
                        <li className='mb-2'>Nutzen Sie Social Media, um Ihre Reichweite zu erhöhen.</li>
                        <li className='mb-2'>Analysieren Sie regelmäßig Ihre Website-Performance und passen Sie diese an.</li>
                    </ul>

                    <div id={7} style={{ position: "relative", top: "-100px" }}></div>
                    <h2 className='mb-4 md:text-4xl sm:text-3xl text-2xl font-xl'>Fazit</h2>
                    <p className='mb-8'>
                        Eine professionelle Website ist für KMUs und Kleinunternehmer heute unverzichtbar. Sie steigert Ihre Sichtbarkeit, baut Vertrauen auf und hilft Ihnen, sich gegen die Konkurrenz durchzusetzen. Mit Webaffinity haben Sie einen starken Partner an Ihrer Seite, der Ihnen den Weg zum Online-Erfolg ebnet.
                    </p>

                </div>
                {/* Table of Contents */}
                <div className='md:w-1/4 flex flex-col sticky top-[100px]'>
                    <p className='font-semibold text-lg mb-2 hidden md:block'>Inhalte</p>

                    <ol className=' hidden md:block max-h-[40vh] overflow-y-auto'>
                        <ScrollLink to={1} smooth={true}>
                            <li className='p-3 bg-black-400 border-l-4 border-black-800 hover:border-[#6abca5] hover:text-[#6abca5] hover:underline transition'>Einleitung</li>
                        </ScrollLink>
                        <ScrollLink to={2} smooth={true}>
                            <li className='p-3 bg-black-400 border-l-4 border-black-800 hover:border-[#6abca5] hover:text-[#6abca5] hover:underline transition'>Bedeutung einer Website für KMU´s</li>
                        </ScrollLink>
                        <ScrollLink to={3} smooth={true}>
                            <li className='p-3 bg-black-400 border-l-4 border-black-800 hover:border-[#6abca5] hover:text-[#6abca5] hover:underline transition'>Vorteile einer modernen Website</li>
                        </ScrollLink>
                        <ScrollLink to={4} smooth={true}>
                            <li className='p-3 bg-black-400 border-l-4 border-black-800 hover:border-[#6abca5] hover:text-[#6abca5] hover:underline transition'>Herausforderungen für Kleinunternehmer ohne Website</li>
                        </ScrollLink>
                        <ScrollLink to={5} smooth={true}>
                            <li className='p-3 bg-black-400 border-l-4 border-black-800 hover:border-[#6abca5] hover:text-[#6abca5] hover:underline transition'>Wie Webaffinity KMUs zum Erfolg verhilft</li>
                        </ScrollLink>
                        <ScrollLink to={6} smooth={true}>
                            <li className='p-3 bg-black-400 border-l-4 border-black-800 hover:border-[#6abca5] hover:text-[#6abca5] hover:underline transition'>Tipps für den Start ins Internet</li>
                        </ScrollLink>
                        <ScrollLink to={7} smooth={true}>
                            <li className='p-3 bg-black-400 border-l-4 border-black-800 hover:border-[#6abca5] hover:text-[#6abca5] hover:underline transition'>Fazit</li>
                        </ScrollLink>
                        <div className='relative'></div>
                    </ol>
                    <Link to={"/kontakt"}>
                        <div className='p-4 bg-[#6abca533] mt-10 rounded-xl text-center'>
                            <p className='mb-2 text-lg'>Kleinunternehmer-Bonus</p>
                            <p className='text-5xl mb-2 font-semibold'>-20%</p>
                            <p className='italic text-black-500 mb-4'>auf alle Dienstleistungen</p>
                            <button className='bg-black text-white rounded-lg border-[2px] p-4 w-full border-black hover:bg-transparent hover:text-black transition'>
                                kontaktieren
                            </button>
                        </div>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Template
