import blog from '@/api/blog.js'

export default {
    data() {
        return {
            title: '',
            description: '',
            content: '',
            at_index: true,
        }
    },
    methods:{
        onCreate(){
            blog.createBlog({title:this.title,description:this.description,content:this.content,at_index:this.at_index}).then(res=>{
                console.log('createBlog', res);
                this.$message.success(res.msg)
                this.$router.push({path:`/detail/${res.resource.id}`})
            })
        }
    }
};