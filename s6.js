class identitas {
    constructor(nama, umur, hobi){
        this.nama = nama;
        this.umur = umur;
        this.hobi = hobi;
    }
bio(){
    console.log(`nama saya ${this.nama} umur ${this.umur} dan hobi saya ${this.hobi}`);
}
}
const raqqa = new identitas("raqqa", "17 tahun", "olahraga")
raqqa.bio()
