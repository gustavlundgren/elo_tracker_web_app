<template>
    <div class="login-page">
        <h1 style="font-weight: bold;">Login</h1>
        <form @submit.prevent="handleLogin">
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" placeholder="Enter your Email" v-model="email" required />
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" placeholder="Enter your password" v-model="password" required />
            </div>
            <button type="submit" class="register-button">Login</button>
            <button type="button" class="register-button" @click="goToRegister">Register</button>
        </form>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
</template>

<script>
    import { login } from "../api/index.js"; // ✅ Import login function from /src/api/index.js

    export default {
        data() {
            return {
                email: '',
                password: '',
                errorMessage: ''
            };
        },
        methods: {
            async handleLogin() {
                try {
                    await login(this.email, this.password); 
                    console.log("Login successful");
                    this.$router.push('/my-profile');
                } catch (error) {
                    console.error('Login error:', error);
                    this.errorMessage = "Invalid email or password.";
                }
            },
            goToRegister() {
                this.$router.push('/register');
            }
        }
    };
</script>

<style scoped>
.login-page {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #1e1e1e;
    border-radius: 5px;
    color: white;
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
    text-align: left;
}

input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
}

.register-button {
    width: 100%;
    padding: 10px;
    background-color: #bb86fc;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 10px;
}

button:hover {
    background-color: #03dac6;
}

.error {
    color: red;
    margin-top: 10px;
}
</style>
