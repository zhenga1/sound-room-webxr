import wave, math, struct
sr=22050
with wave.open('src/audio/strings.wav','wb') as f:
    f.setnchannels(1);f.setsampwidth(2);f.setframerate(sr)
    data=[]
    for i in range(sr*12):
        t=i/sr
        value=sum(math.sin(2*math.pi*freq*t+h*.05*math.sin(2*math.pi*t/12))/h**1.7 for freq in [130,195] for h in range(1,6))
        data.append(int(value*.18*32767))
    f.writeframes(struct.pack('<'+'h'*len(data),*data))
