import Profile from './profile';

function Footer() {
  return(
    <div className="grid grid-cols-1 gap-3">
      <p className="text-center text-2xl font-bold">連絡先</p>
      <p className="text-center">{Profile.name}</p>
      <p className="text-center">{Profile.faculty}</p>
      <p className="text-center">{Profile.lab}</p>
      <p className="text-center">{Profile.email}</p>
    </div>

  );
}

export default Footer;