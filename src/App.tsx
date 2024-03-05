import { Portfolio, MainHead, Avatar, Intro, PortSection, SubHead, LinkBar, SocialLink, BulletList, ListItem, MD, Label, CardList, Card } from '@silicoflare/portfolify';


export default function App()   {
    return (
        <Portfolio>
            <MainHead>Suraj B M</MainHead>
            <Avatar src="avatar.png"/>
            <LinkBar>
                <SocialLink href="/resume.pdf" logo="nf-md-file_document" />
                <SocialLink href="mailto:suraj.b.m555@gmail.com" logo="nf-oct-mail" />
                <SocialLink href="https://github.com/silicoflare" logo="nf-md-github" />
                <SocialLink href="https://instagram.com/suraj.b.m" logo="nf-md-instagram" />
                <SocialLink href="https://in.linkedin.com/in/suraj-b-m" logo="nf-md-linkedin" />
            </LinkBar>
            <Intro>Student and Frontend Web Developer</Intro>
            <PortSection>
                <SubHead>Projects</SubHead>
                <CardList>
                    <Card heading="Formista">
                        <MD>
                            A form app with more features. [Link](https://formista.vercel.app)
                        </MD>
                    </Card>
                    <Card heading="LuffyEdit">
                        <MD>
                            A simple text editor in C with file save and load.
                        </MD>
                    </Card>
                    <Card heading="docker-hadoop">
                        <MD>
                        A minified Docker image containing pre installed tools required for Big Data.
                        </MD>
                    </Card>
                    <Card heading="@silicoflare/portfolify">
                        <MD>
                        A React component package to build a simple portfolio website.
                        </MD>
                    </Card>
                </CardList>
            </PortSection>
        </Portfolio>
    )
}