import imgh from '../assets/index1.jpeg'
export default function Avatar() {
    return (
            <img
              className="avatar"
              src={imgh}
              alt="Lin Lanying"
              width={100}
              height={100}
              style={{
                width: 50,
                height: 50,
                borderRadius: 50
              }}
            />
    );
  }
  