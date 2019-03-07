<template>
    <div class="data-list">
        <div class="button-get-data">
            <md-button class="md-raised md-primary" @click="getDataList">Get Data</md-button>
            <router-link to="/">
                <md-button class="md-raised md-primary">Home</md-button>
            </router-link>
        </div>
        <div class="list-wrapper" v-if="!isError">
            <md-table>
                <md-table-header>
                    <md-table-row>
                        <md-table-head md-numeric>Name</md-table-head>
                        <md-table-head md-numeric>Email</md-table-head>
                        <md-table-head md-numeric>Address</md-table-head>
                        <md-table-head md-numeric>Gender</md-table-head>
                    </md-table-row>
                </md-table-header>
                <md-table-body>
                    <md-table-row v-for="dataUser in dataList" :key="dataUser._id">
                        <md-table-cell md-numeric>{{ dataUser.name }}</md-table-cell>
                        <md-table-cell md-numeric>{{ dataUser.email }}</md-table-cell>
                        <md-table-cell md-numeric>{{ dataUser.address }}</md-table-cell>
                        <md-table-cell md-numeric>{{ dataUser.gender }}</md-table-cell>
                        <md-button class="md-raised md-primary" @click="deleteId(dataUser._id)">delete</md-button>
                    </md-table-row>
                </md-table-body>
            </md-table>
        </div>
        <div class="error-block" v-else>
            <md-card class="md-warn">
                <md-card-content>
                    <h1 class="error-view">DataBase Error</h1>
                </md-card-content>
            </md-card>
        </div>
    </div>
</template>

<style>
    .button-get-data {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .list-wrapper {
        width: 70%;
        max-height: 70vh;
        background-color: beige;
        overflow-y: scroll;
        margin: 10px auto;
    }

    .error-block {
        width: 50%;
    }

    .error-view {
        text-align: center;
    }
</style>

<script>
import axios from 'axios'

export default {
    name: 'data',
    data: () => {
        return {
            dataList: [],
            isError: false
        }
    },
    methods: {
        // Get list of all users from database
        async getDataList () {
            try {
                let response = await axios.get('http://localhost:3000/api/records')
                this.dataList = response.data
            } catch (err) {
                this.isError = true
            }
        },

        // Delete user by his ID
        async deleteId (id) {
            await axios.delete(`http://localhost:3000/api/records/${id}`)
            .then(res => {
                if (res.data.state === 'deleted') {
                    console.log(`Successfully deleted id ${id}`)
                    // Refreshing datalist
                    this.getDataList()
                }
                else alert(`User with id ${this.id} doesn't exist in database!`)
            })
            .catch(err => {
                alert('Something went wrong on server side...')
            })
        }
    }
}
</script>
