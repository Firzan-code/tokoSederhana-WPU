class TokoOnline {
  constructor() {
    this.barangToko = [];
    this.pendapatan = 0;
  }
  tampilkanBarang() {
    console.log("Gudang : ");
    this.barangToko.forEach((p) => {
      console.log(
        `Nama : ${p.namaBarang}, Harga : ${p.hargaBarang}, Stok : ${p.stokBarang}`
      );
    });
  }
  tambahBarang(namaBarang, hargaBarang, stokBarang) {
    let Barang = {
      namaBarang,
      hargaBarang,
      stokBarang,
    };
    this.barangToko.push(Barang);
    console.log(
      `Nama : ${namaBarang}, Harga : ${hargaBarang}, Stok : ${stokBarang} - berhasil di tambah`
    );
  }
  showPendapatan() {
    console.log(`Pendapatan : ${this.pendapatan}`);
  }
  jualBarang(namaBarang, dibeli) {
    let jualIsi = this.barangToko.find((c) => c.namaBarang == namaBarang);
    if (jualIsi) {
      if (jualIsi.stokBarang >= dibeli) {
        jualIsi.stokBarang -= dibeli;
        let totalHarga = dibeli * jualIsi.hargaBarang;
        this.pendapatan += totalHarga;
        console.log(`${namaBarang}, dibeli ${totalHarga}`);
      } else {
        console.log("Barang tidak mencukupi");
      }
    } else {
      console.log("Tidak ada dalam daftar");
    }
  }
}
let gudang1 = new TokoOnline();
gudang1.tambahBarang("Royco", 1000, 20);
gudang1.tambahBarang("Jasuke", 12000, 90);
gudang1.jualBarang("Royco", 12);
gudang1.jualBarang("Royco", 12);
gudang1.jualBarang("Jasuke", 50);
gudang1.jualBarang("Rixa", 12);
gudang1.tampilkanBarang();
gudang1.showPendapatan();
