async function autoDownload() {
    const url = document.getElementById('linkInput').value;
    const res = await fetch(`https://api.tikwm.com/api/?url=${encodeURIComponent(url)}`);
    const data = await res.json();
    
    if (data.data.play) {
      const a = document.createElement('a');
      a.href = data.data.play;
      a.download = "video.mp4";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else {
      alert("Gagal mendapatkan video.");
    }
  }
  