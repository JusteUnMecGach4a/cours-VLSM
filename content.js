const pagesData = {
    intro: {
        title: "1. Introduction & Avantages",
        content: `
            <div class="card">
                <h3>Le concept VLSM</h3>
                <p>Le <strong>Variable Length Subnet Masking</strong> a été développé pour pallier le manque de souplesse du subnetting classique. Son principe est simple : <strong>créer des sous-réseaux d'un sous-réseau</strong>.</p>
                <div class="info-box">
                    <strong>Note du référentiel :</strong> Le VLSM est indispensable pour les réseaux d'entreprise hiérarchiques. Il permet d'utiliser plusieurs longueurs de masque sur un même bloc d'adresses.
                </div>
            </div>
            <div class="card">
                <h3>Protocoles compatibles</h3>
                <p>Tous les protocoles ne supportent pas le VLSM. On distingue :</p>
                <ul>
                    <li><strong>Incompatibles (Classfull) :</strong> RIPv1.</li>
                    <li><strong>Compatibles (Classless) :</strong> RIPv2, EIGRP, OSPF.</li>
                </ul>
            </div>
        `
    },
    resolution: {
        title: "2. Résolution : IP & MAC",
        content: `
            <div class="card">
                <h3>Analyse technique des erreurs</h3>
                <p>Dans l'exercice 3.1 du PDF, nous analysons 5 stations. Voici pourquoi certaines sont invalides :</p>
                <table>
                    <tr><th>Type d'erreur</th><th>Explication approfondie</th></tr>
                    <tr><td>Format MAC</td><td>Une adresse MAC est en hexadécimal (0-9, A-F). Le caractère 'G' est donc une erreur de syntaxe.</td></tr>
                    <tr><td>Limite IP</td><td>Un octet d'une adresse IP ne peut pas dépasser <strong>255</strong>. L'adresse 126.0.0.317 est techniquement impossible.</td></tr>
                </table>
            </div>
        `
    },
    calcul: {
        title: "3. Mécanique du Subnetting",
        content: `
            <div class="card">
                <h3>Emprunt de bits</h3>
                <p>Pour diviser un réseau, on "vole" des bits à la partie hôte. </p>
                <div class="terminal">
                    Exemple PDF : Masque 255.255.240.0<br>
                    240 en binaire = 1111 0000<br>
                    Bits empruntés = 4 bits<br>
                    Sous-réseaux créés = 2^4 = 16
                </div>
            </div>
        `
    },
    tokyo: {
        title: "4. Cas d'étude : Tokyo/NY",
        content: `
            <div class="card">
                <h3>Application du VLSM (Page 11 du PDF)</h3>
                <p>Pour le réseau de Tokyo, on adapte le masque au besoin réel :</p>
                <ul>
                    <li><strong>Production (2000 hôtes) :</strong> On utilise un /21 (2048 adresses).</li>
                    <li><strong>Administration (100 hôtes) :</strong> On utilise un /25 (128 adresses).</li>
                    <li><strong>DMZ (20 serveurs) :</strong> On utilise un /27 (32 adresses).</li>
                </ul>
                <p><em>Résultat :</em> On économise des milliers d'adresses par rapport à un subnetting fixe.</p>
            </div>
        `
    },
    routage: {
        title: "5. Analyse des Tables de Routage",
        content: `
            <div class="card">
                <h3>Interprétation du "show ip route"</h3>
                <p>Voici comment lire la table finale du PDF (Page 21) :</p>
                <div class="terminal">
                    R 204.204.7.0/24 [120/1] via 199.6.13.2<br>
                    - R : Route apprise par RIP<br>
                    - [120/1] : Distance administrative / Distance
                </div>
            </div>
        `
    }
};
