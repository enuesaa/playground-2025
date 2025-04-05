import soco
import soco.events
from soco import SoCo, discover
import time
from typing import Optional
import queue
import threading

def search_sonos() -> Optional[SoCo]:
    for zone in discover() or []:
        print(zone.ip_address)
        return zone
    return None

def play_uri(sonos: SoCo):
    time.sleep(5)
    # see https://github.com/SoCo/SoCo
    sonos.play_uri('http://ia801402.us.archive.org/20/items/TenD2005-07-16.flac16/TenD2005-07-16t10Wonderboy.mp3')
    time.sleep(5)
    # track = sonos.get_current_track_info()
    # print(track['title'])
    sonos.pause()
    time.sleep(5)

def poll_volume_change(sonos: SoCo):
    sub = sonos.renderingControl.subscribe() # type: soco.events.Subscription

    while True:
        print('waiting')
        try:
            event = sub.events.get(timeout=0.5)
            print(event.variables)
        except queue.Empty:
            pass

def poll_music_change(sonos: SoCo):
    sub = sonos.avTransport.subscribe()

    while True:
        try:
            event = sub.events.get(timeout=0.5)
            print("event:", event.variables)
        except queue.Empty:
            pass

def main():
    sonos = search_sonos()
    if sonos is None:
        print('not found')
        return
    
    print(f'found: {sonos.player_name}')

    thread = threading.Thread(target=poll_music_change, args=[sonos], daemon=True)
    thread.start()

    play_uri(sonos)
