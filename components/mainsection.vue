<template>
    <div class="py-9 md:py-0 px-9 md:px-48">
        <p class="font-bold text-6xl md:text-8xl py-6 px-0">Bonjour</p>

        <div id="hide" class="xl:w-2/4">
            <h1 class="text-3xl md:text-4xl">Je suis Geoffrey Laville</h1>
            <p class="text-2xl mt-12 mb-6 font-extralight">
            Développeur web basé sur Bordeaux, je suis égalemment habitué au remote avec plusieurs expériences réussies.
            Converti au Javascript par <a class="link" href="https://www.ironhack.com/" target="_blank">IronHack</a> il y a plus d'un an, j'ai pu découvrir MongoDB, ExpressJS, React & Node sur des projets concrets, avant d'effectuer ma première mission fullstack chez <a class="link" href="http://itaf.tech/" target="_blank">ITAF.TECH</a> avec l'utilisation intensive de VueJs.
            </p>
            <p class="text-2xl my-6 font-extralight">
            Retrouvez mon profil <a class="link" href="https://www.linkedin.com/in/glaville/" target="_blank">LinkedIn</a> pour en savoir plus sur mes précédentes expériences. <br>
            Pour les plus curieux d'entre vous, vous pouvez égalemment visiter ma page <a class="link" href="https://github.com/GeoLvl" target="_blank">Github</a> et retrouver l'ensemble de <NuxtLink class="link" to="/projects">mes projets.</NuxtLink>
            </p>
            <p class="text-2xl my-6 font-extralight">
            En dehors du dev, je suis passionné de musique, de sport, de cuisine et surtout des couteaux japonais (les vrais). <br>
            J'aime l'aventure et l'Australie.
            </p>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
.link {
    text-decoration: none;
    white-space: nowrap;
    color: #16161d;
    position: relative;
}
.link:after {
    content: '';
    position: absolute;
    z-index: -1;
    top: 66%;
    left: -0.1em;
    right: -0.1em;
    bottom: 0;
    transition: top 200ms cubic-bezier(0, 0.8, 0.13, 1);
    background-color: #FF6400;
}
.link:hover:after {
    top: 0%;
}
</style>

