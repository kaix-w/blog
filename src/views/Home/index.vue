<template>
    <div>
        <IndexAnimation/>
        <Header background="transparent"></Header>
        <div class="commom">
            <div class="home">
                {{info.introduction}}
            </div>
        </div>
    </div>
</template>

<script>
 import IndexAnimation from "@/components/IndexAnimation"
 import Header from "@/components/Header"
 let i = 0;
 let timer = null;
export default {
    name: 'index',
    components: {
        IndexAnimation,
        Header
    },
    data(){
        return{
            info:{
                introduction:'',
                introductionTarget:'Everything will gonna be fine!'
            }
        }
    },
    mounted(){
        this.typing();
        console.log(this.info.introductionTarget)
    },
    methods:{
        typing(){
            if(i<=this.info.introductionTarget.length){
                this.info.introduction = this.info.introductionTarget.slice(0,i++) + '_';
                timer = setTimeout(this.typing,100);
            }else {
                this.info.introduction = this.info.introductionTarget;
                clearTimeout(timer)
            }
        }
    }
}
</script>

<style scoped lang="less">
.home{
    position: absolute;
    top: 50%;
    width: 100%;
    text-align: center;
    transform: translateY(-50%);
    font-size: 0.48rem;
    color: #fff;
    font-weight: 500;
}
</style>