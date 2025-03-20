<script lang="ts" setup>
import { validateOrder, order } from "../order-service";
</script>
<template>
    <div>
        <h2>Ma commande</h2>
        <div>
            <ul>
                <li v-for="item in order.meals">
                    <h3>{{ item.meal.name }}</h3>
                    <h3>{{ item.quantity }}</h3>
                </li>
            </ul>
        </div>
        <div class="order-btn" v-if="order.meals.length > 0" v-on:click="validateOrder()">Commander</div>
    </div>


</template>
<style lang="scss">
.order-btn {
    padding: 5px 10px;
    color: black;
    background-color: white;
    border: 2px solid black;
    text-align: center;

    &:hover {
        cursor: pointer;
    }
}
</style>