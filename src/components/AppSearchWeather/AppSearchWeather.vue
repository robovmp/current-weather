<template>
    <div class="container">
        <section id="searchWeather">
            <h1>Previsão do tempo</h1>
            <form>
                <input type="text" v-model="city" placeholder="Insira o nome da cidade" />
                <button @click.prevent="getWeatherCity"><img :src=searchImg alt="Search"></button>
            </form>
            <main v-if="weather">
                <span @click="closeWeather"><img :src=close alt="fechar"></span>
                <p>{{weather.name}}, {{weather.sys.country}}</p>
                <h1>{{ kelvinToCelsius(weather.main.temp) }}°C, {{weather.weather[0].description}}</h1>
                <fieldset>
                    <span>
                        <img :src=max alt="temperatura máxima">
                        <p> <strong>Máxima: {{kelvinToCelsius(weather.main.temp_max)}}°C </strong></p>
                    </span>
                    <span>
                        <img :src=min alt="temperatura mínima"/>
                        <p> <strong>Mínima: {{kelvinToCelsius(weather.main.temp_min)}}°C </strong></p>
                    </span>
                    <span>
                        <img :src=sense alt="sensação"/>
                        <p> <strong>Sensação: {{kelvinToCelsius(weather.main.feels_like)}}°C </strong></p>
                    </span>
                    <span>
                        <img :src=wind alt="vento"/>
                        <p> <strong>Vento: {{metersToKilometer(weather.wind.speed)}}km/h </strong></p>
                    </span>
                    <span>
                        <img :src=drop alt="humidade"/>
                        <p> <strong>Humidade: {{weather.main.humidity}}% </strong></p>
                    </span>
                </fieldset>
            </main>
        </section>
    </div>
</template>
<script src="./index.js"/>
<style src="./style.scss" lang="scss" scoped/>