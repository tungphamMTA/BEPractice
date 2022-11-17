obj = {
    // A: 10,
    // B: 2,
    // C: 3,    

    type(){
        this.A = +prompt('a= ', 0);
        this.B = +prompt('b=', 0);
        this.C = +prompt('c=', 0);
    },

    input(a, b, c){
        this.A = a;
        this.B = b;
        this.C = c;
    },

    diemTB() {
        return diemTB = (this.A  + this.B + this.C) / 3;
    }
}

obj.input(1,2,3);
alert(obj.diemTB())
