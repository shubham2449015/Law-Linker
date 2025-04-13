function showSection(section) {
    let content = "";
  
    if (section === "rights") {
        content = `
        
   <ul>
  <li><strong>Right to Equality (Articles 14-18)</strong> — Guarantees equal treatment before law.</li>
  <li><strong>Right to Freedom (Articles 19-22)</strong> — Ensures freedom of speech and personal liberty.</li>
  <li><strong>Right against Exploitation (Articles 23-24)</strong> — Prohibits human trafficking and forced labour.</li>
  <li><strong>Right to Freedom of Religion (Articles 25-28)</strong> — Grants freedom to practice any religion.</li>
  <li><strong>Cultural and Educational Rights (Articles 29-30)</strong> — Protects minority culture and educational rights.</li>
  <li><strong>Right to Constitutional Remedies (Article 32)</strong> — Right to approach Supreme Court for rights enforcement.</li>
</ul>

        `;
      
      
    }
  
    if (section === "crimes") {
      content = `
        <h2>Crime Categories in India</h2>
    <ul>
  <li><strong>Murder</strong> (IPC Section 302) — Death penalty or life imprisonment and fine.</li>
  <li><strong>Theft</strong> (IPC Section 378) — Imprisonment up to 3 years, or fine, or both.</li>
  <li><strong>Robbery</strong> (IPC Section 392) — Rigorous imprisonment up to 10 years and fine.</li>
  <li><strong>Rape</strong> (IPC Section 376) — Rigorous imprisonment not less than 10 years, may extend to life.</li>
  <li><strong>Kidnapping</strong> (IPC Section 363) — Imprisonment up to 7 years and fine.</li>
  <li><strong>Dowry Death</strong> (IPC Section 304B) — Imprisonment not less than 7 years, may extend to life imprisonment.</li>
  <li><strong>Assault</strong> (IPC Section 351) — Imprisonment up to 3 months, or fine, or both.</li>
  <li><strong>Cheating</strong> (IPC Section 420) — Imprisonment up to 7 years and fine.</li>
  <li><strong>Defamation</strong> (IPC Section 499) — Imprisonment up to 2 years, or fine, or both.</li>
  <li><strong>Attempt to Commit Suicide</strong> (IPC Section 309) — Imprisonment up to 1 year, or fine, or both.</li>
  <li><strong>Criminal Breach of Trust</strong> (IPC Section 405) — Imprisonment up to 3 years, or fine, or both.</li>
  <li><strong>House Trespass</strong> (IPC Section 448) — Imprisonment up to 1 year, or fine, or both.</li>
  <li><strong>Rioting</strong> (IPC Section 147) — Imprisonment up to 2 years, or fine, or both.</li>
  <li><strong>Public Nuisance</strong> (IPC Section 268) — Punishable as per the nature and extent of nuisance created.</li>
  <li><strong>Adultery</strong> (IPC Section 497) — Decriminalized by Supreme Court in 2018 (previously imprisonment up to 5 years).</li>
  <li><strong>Bigamy</strong> (IPC Section 494) — Imprisonment up to 7 years and fine.</li>
  <li><strong>Voluntarily Causing Hurt</strong> (IPC Section 323) — Imprisonment up to 1 year, or fine, or both.</li>
  <li><strong>Attempt to Murder</strong> (IPC Section 307) — Imprisonment up to 10 years, may extend to life imprisonment and fine.</li>
  <li><strong>Forgery</strong> (IPC Section 465) — Imprisonment up to 2 years, or fine, or both.</li>
  <li><strong>Criminal Intimidation</strong> (IPC Section 506) — Imprisonment up to 2 years, or fine, or both.</li>
</ul>

      `;
    }
  
    if (section === "ipcs") {
      content = `
        <h2>Major Indian Penal Code (IPC) Sections</h2>
<ul>
  <li><strong>IPC Section 302</strong> — Punishment for Murder: Death penalty or life imprisonment and fine.</li>
  <li><strong>IPC Section 376</strong> — Punishment for Rape: Rigorous imprisonment not less than 10 years, extendable to life.</li>
  <li><strong>IPC Section 378</strong> — Punishment for Theft: Imprisonment up to 3 years, or fine, or both.</li>
  <li><strong>IPC Section 392</strong> — Punishment for Robbery: Rigorous imprisonment up to 10 years and fine.</li>
  <li><strong>IPC Section 363</strong> — Punishment for Kidnapping: Imprisonment up to 7 years and fine.</li>
  <li><strong>IPC Section 304B</strong> — Punishment for Dowry Death: Imprisonment not less than 7 years, extendable to life.</li>
  <li><strong>IPC Section 351</strong> — Punishment for Assault: Imprisonment up to 3 months, or fine, or both.</li>
  <li><strong>IPC Section 420</strong> — Punishment for Cheating: Imprisonment up to 7 years and fine.</li>
  <li><strong>IPC Section 499</strong> — Punishment for Defamation: Imprisonment up to 2 years, or fine, or both.</li>
  <li><strong>IPC Section 309</strong> — Punishment for Attempt to Commit Suicide: Imprisonment up to 1 year, or fine, or both.</li>
  <li><strong>IPC Section 405</strong> — Punishment for Criminal Breach of Trust: Imprisonment up to 3 years, or fine, or both.</li>
  <li><strong>IPC Section 448</strong> — Punishment for House Trespass: Imprisonment up to 1 year, or fine, or both.</li>
  <li><strong>IPC Section 147</strong> — Punishment for Rioting: Imprisonment up to 2 years, or fine, or both.</li>
  <li><strong>IPC Section 268</strong> — Punishment for Public Nuisance: Punishable as per the nature and extent of nuisance.</li>
  <li><strong>IPC Section 494</strong> — Punishment for Bigamy: Imprisonment up to 7 years and fine.</li>
  <li><strong>IPC Section 323</strong> — Punishment for Voluntarily Causing Hurt: Imprisonment up to 1 year, or fine, or both.</li>
  <li><strong>IPC Section 307</strong> — Punishment for Attempt to Murder: Imprisonment up to 10 years, extendable to life, and fine.</li>
  <li><strong>IPC Section 465</strong> — Punishment for Forgery: Imprisonment up to 2 years, or fine, or both.</li>
  <li><strong>IPC Section 506</strong> — Punishment for Criminal Intimidation: Imprisonment up to 2 years, or fine, or both.</li>
</ul>

      `;
    }
  
    if (section === "faq") {
      content = `
        <h2>Frequently Asked Legal Questions</h2>
        <ul>
          <li><button onclick="alert('IPC 420 covers cheating and fraud, punishable up to 7 years.')">What is IPC 420?</button></li>
          <li><button onclick="alert('If arrested without a warrant, you have the right to remain silent, contact a lawyer, and be presented before a magistrate within 24 hours.')">What rights do I have if I’m arrested without a warrant?</button></li>
          <li><button onclick="alert('You have the right to be informed of your charges, get bail for bailable offenses, and legal representation.')">Your Rights If Arrested</button></li>
          <li><button onclick="alert('Immediately file an FIR, seek medical help if needed, collect evidence, and inform your lawyer.')">What to Do After a Crime</button></li>
        </ul>
      `;
    }
  
    const contentArea = document.getElementById("content-area");
    contentArea.innerHTML = content;
    contentArea.classList.add("show");
  
    // Smooth scroll to content area
    contentArea.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  