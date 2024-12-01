// 鹿児島市内の銭湯・温泉データ
const onsenData = [
    { name: "温泉錦湯", springQuality: "塩化物泉", effects: "情報なし", address: "鹿児島市下荒田3-3-17" },
    { name: "坂元温泉", springQuality: "炭酸水素塩泉", effects: "美肌効果、神経痛の緩和", address: "鹿児島市坂元町18-19" },
    { name: "春日温泉", springQuality: "塩化物泉", effects: "保湿効果、冷え性改善", address: "鹿児島市下荒田1丁目28-1" },
    { name: "霧島温泉", springQuality: "塩化物泉", effects: "筋肉痛、関節痛の緩和", address: "鹿児島市西千石町6-20" },
    { name: "吉野温泉", springQuality: "炭酸水素塩泉", effects: "美肌効果、疲労回復", address: "鹿児島市吉野1丁目41-6" },
    { name: "渓谷苑", springQuality: "ナトリウム-塩化物・硫酸塩泉", effects: "神経痛、筋肉痛の緩和", address: "鹿児島市東佐多町710-2" },
    { name: "永盛温泉", springQuality: "単純温泉", effects: "リラクゼーション、疲労回復", address: "鹿児島市西佐多町3227-1" },
    { name: "福助温泉", springQuality: "単純温泉", effects: "リラクゼーション、神経痛の緩和", address: "鹿児島市伊敷1-16-25" },
    { name: "温泉お乃湯", springQuality: "塩化物泉（ナトリウム塩化物・炭酸水素塩泉）", effects: "保湿効果、疲労回復", address: "鹿児島市小野3-5-27" },
    { name: "大黒温泉", springQuality: "単純温泉", effects: "疲労回復、筋肉痛の緩和", address: "鹿児島市伊敷8-22-20" },
    { name: "花野温泉たぬき湯", springQuality: "単純泉", effects: "美肌効果、リラクゼーション", address: "鹿児島市伊敷町4467" },
    { name: "芦刈温泉", springQuality: "炭酸水素塩泉（ナトリウム-炭酸水素塩泉）", effects: "美肌効果、疲労回復", address: "鹿児島市若葉町45-1" },
    { name: "みどり温泉", springQuality: "情報なし", effects: "情報なし", address: "鹿児島市岡之原町130" },
    { name: "薬師温泉", springQuality: "塩化物泉", effects: "保湿効果、筋肉痛の緩和", address: "鹿児島市薬師1-22-36" },
    { name: "はらら温泉", springQuality: "単純温泉", effects: "リラクゼーション、疲労回復", address: "鹿児島市原良4-2-7" },
    { name: "永吉温泉", springQuality: "炭酸水素塩泉", effects: "美肌効果、神経痛の緩和", address: "鹿児島市永吉1-33-6" },
    { name: "めいわ温泉", springQuality: "炭酸水素塩泉", effects: "美肌効果、疲労回復", address: "鹿児島市明和1-25-1" },
    { name: "武岡温泉", springQuality: "炭酸水素塩泉", effects: "神経痛、筋肉痛の緩和", address: "鹿児島市田上6-9-26" },
    { name: "鹿児島温泉時之栖", springQuality: "塩化物泉", effects: "疲労回復、リラクゼーション", address: "鹿児島市田上6-1-6" },
    { name: "新川温泉", springQuality: "塩化物泉", effects: "保湿効果、冷え性改善", address: "鹿児島市唐湊4-7-8" },
    { name: "新とそ温泉", springQuality: "塩化物泉", effects: "保湿効果、疲労回復", address: "鹿児島市唐湊1-29-1" },
    { name: "竹迫温泉", springQuality: "塩化物泉", effects: "美肌効果、冷え性改善", address: "鹿児島市下荒田3-22-10" },
    { name: "みずほ温泉", springQuality: "塩化物泉", effects: "保湿効果、リラクゼーション", address: "鹿児島市上荒田町32-14" },
    { name: "亀乃湯", springQuality: "人工温泉", effects: "疲労回復、リラクゼーション", address: "鹿児島市三和町64-16" },
    { name: "真砂温泉", springQuality: "塩化物泉", effects: "筋肉痛、疲労回復", address: "鹿児島市真砂町59-19" },
    { name: "一本桜温泉センター", springQuality: "塩化物泉", effects: "疲労回復、冷え性改善", address: "鹿児島市紫原6-1-18" },
    { name: "郡元温泉", springQuality: "塩化物泉", effects: "保湿効果、疲労回復", address: "鹿児島市南郡元町3-1" },
    { name: "慈眼寺温泉", springQuality: "単純泉", effects: "疲労回復、リラクゼーション", address: "鹿児島市谷山中央6-35-20" },
    { name: "中山温泉", springQuality: "塩化物泉", effects: "筋肉痛、冷え性改善", address: "鹿児島市中山町1390" }
];

// 温泉情報を表示する関数
function displayOnsenInfo(filterText = "", filterEffect = "") {
    const onsenList = document.getElementById("onsen-list");
    onsenList.innerHTML = ""; // 一度リストをクリア

    onsenData
        .filter(onsen =>
            (onsen.name.includes(filterText) ||
                onsen.springQuality.includes(filterText)) &&
            (filterEffect === "" || onsen.effects.includes(filterEffect))
        )
        .forEach(onsen => {
            const card = document.createElement("div");
            card.className = "onsen-card";

            const name = document.createElement("h2");
            name.textContent = onsen.name;

            const springQuality = document.createElement("p");
            springQuality.textContent = `泉質: ${onsen.springQuality}`;

            const effects = document.createElement("p");
            effects.textContent = `効能: ${onsen.effects}`;

            const address = document.createElement("p");
            address.innerHTML = `住所: <a href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(onsen.address)}" target="_blank">${onsen.address}</a>`;
            address.style.color = "#007BFF";

            card.appendChild(name);
            card.appendChild(springQuality);
            card.appendChild(effects);
            card.appendChild(address);

            onsenList.appendChild(card);
        });
}

// イベントリスナーを設定
document.getElementById("search-box").addEventListener("input", (event) => {
    const filterText = event.target.value;
    const filterEffect = document.getElementById("effect-filter").value;
    displayOnsenInfo(filterText, filterEffect);
});

document.getElementById("effect-filter").addEventListener("change", (event) => {
    const filterEffect = event.target.value;
    const filterText = document.getElementById("search-box").value;
    displayOnsenInfo(filterText, filterEffect);
});

// 初期表示
document.addEventListener("DOMContentLoaded", () => displayOnsenInfo());
