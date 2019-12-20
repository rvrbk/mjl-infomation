<template>
    <section class="infomation">
        <div class="tire wheel">
            <div class="outer-tire wheel">
                <div class="piezo-units wheel">
                    <div class="inner-tire wheel">
                        <div class="rim wheel">
                            <div class="mask">
                                <div class="crashtest">
                                    <div class="square black"></div>
                                    <div class="square yellow"></div>
                                    <div class="square yellow"></div>
                                    <div class="square black"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="watt">
            <div v-for="i in 50" :key="i" class="spark"></div>
        </div>
        <div class="billboard">{{ lines[pointer] }}</div>
    </section>
</template>

<script>

export default {
    data() {
        return {
            lines: [
                'as the car drives...',
                'the tires experience friction from the road underneath',
                'the piezo units inside them experience this friction too',
                'they will, due to their nature, produce electrical currents',
                'these currents are guided to the car\'s batteries',
                'where they will increase the range of the car and...',
                'give the driver a free of charge charge'
            ],
            pointer: 0,
            fade: ''
        }
    },
    mounted() {
        const scope = this;

        window.setInterval(() => {
            if(scope.pointer == (scope.lines.length - 1)) {
                scope.pointer = 0;
            }
            else {
                scope.pointer++;
            }
        }, 5000);
    }
}

</script>