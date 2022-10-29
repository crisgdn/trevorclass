export default {
    name: "FormEmail",

    //props refers to data that can be passed into the component
    props: ['form'],

    template: 
    `<div class="wrapper">
    <h1>Contact Form</h1>
    <p>Send me a message!</p>
    <form class="contact-box" @submit.prevent ="Submit">
      <ul>
        <li>
          <label for="name">name:</label>
          <input type="text" id="name" class="input-text" placeholder="Enter your Name"
          required="" v-model="email">
        </li>
        <li>
          <label for="email">email address:</label>
          <input type="email" id="email" class="input-text" placeholder="Your Email"
          required="" v-model="password">
        </li>
        <li>
          <label label="message">message:</label>
          <textarea rows="6" id="message" placeholder="Your Message"
          v-model="message">
          </textarea>
        </li>
        <li>
          <button>Send Message</button>
        </li>
      </ul>
    </form>     
</div>`,

    data() {
        return {
            email:'',
            password:'',
            message:''

        }
    },

    methods: {
        showName(){
            console.log(this.name);
        },

        Submit() {
            console.log (this.email, this.password, this.message);
            },

    }
}