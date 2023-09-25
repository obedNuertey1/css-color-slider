namespace Color{
    export interface Icolor<T>{
        shadow: T;
        backgroundGradient: T;
    };

    export class ColorSlides <U extends Icolor<String>>{
        private slideColorArray: U[];

        constructor(slideColorArray:U[]){
            this.slideColorArray = slideColorArray;
        }

        // Generate Slide based on each shadow and background gradient
        public getColorSlides():JSX.Element[]{
            return this.slideColorArray.map((elem:U):JSX.Element=>{
                return (
                    <div className={`marker opacity-80 rounded shadow-md ${elem.shadow} hover:scale-98 hover:shadow-none ml-auto mr-auto mb-2.5 mt-2.5 w-52 h-6 ${elem.backgroundGradient}`}>
                        <div className="cap w-14 h-6 inline-block"></div>
                        <div className="sleeve bg-white opacity-50 w-32 h-6 inline-block border-l-black border-l-8 border-double"></div>
                    </div>
                );
            });
        }
    }
}

export default Color;
