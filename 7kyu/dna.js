function DNAStrand(dna) {
  let dna_strand = '';
  for (let i = 0; i < dna.length; i++) {
    switch (dna[i]) {
      case 'A':
        dna_strand += 'T';
        break;
      case 'T':
        dna_strand += 'A';
        break;
      case 'C':
        dna_strand += 'G';
        break;
      case 'G':
        dna_strand += 'C';
        break;
    }
  }
  return dna_strand;
}
