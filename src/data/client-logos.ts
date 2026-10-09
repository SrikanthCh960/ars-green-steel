// Keep the supplied originals under /ars-assets/clients for regeneration. Routes
// use pre-sized direct assets so small logo placements do not download 1,000px files.
function clientLogo(name: string, fileName: string, width: number, height: number) {
  return {
    name,
    src: "/ars-assets/cwv/clients/grid/" + fileName,
    homepageSrc: "/ars-assets/cwv/clients/homepage/" + fileName,
    width,
    height,
  } as const;
}

export const clientLogos = [
  clientLogo("Akshaya", "akshaya.webp", 1175, 420),
  clientLogo("AMPA", "ampa.webp", 1159, 801),
  clientLogo("Baashyaam", "baashyaam.webp", 1158, 255),
  clientLogo("Casagrand", "casagrand.webp", 1157, 328),
  clientLogo("Chennai Metro Rail", "chennai-metro-rail.webp", 1020, 1004),
  clientLogo("DMart", "dmart.webp", 1194, 398),
  clientLogo("EPIC Group", "epic-group.webp", 1150, 604),
  clientLogo("Foxconn", "foxconn.webp", 1219, 307),
  clientLogo("GAAR", "gaar.webp", 1132, 438),
  clientLogo("KRM", "krm.webp", 1049, 836),
  clientLogo("Noah Infrastructures", "noah.webp", 1220, 451),
  clientLogo("RCCL", "rccl.webp", 662, 841),
  clientLogo("Rohaan Constructions", "rohaan.webp", 1182, 405),
  clientLogo("SAN", "san.webp", 684, 1006),
  clientLogo("Sri Ramachandra Institute", "sri-ramachandra-institute.webp", 1253, 219),
  clientLogo("SRC Infrastructure Builders", "src-infrastructure-builders.webp", 1206, 806),
  clientLogo("Sri Venkateswara University", "sri-venkateswara-university.webp", 1137, 1126),
  clientLogo("VGN", "vgn.webp", 1251, 409),
  clientLogo("V. Sathyamoorthy & Co.", "vs-sathyamoorthy.webp", 1254, 682),
] as const;
