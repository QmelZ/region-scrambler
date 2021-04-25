Events.on(ClientLoadEvent, () => {
    let randomizer = Core.atlas.getRegions().copy();
    Core.atlas.getRegions().each(e => {
        let region = randomizer.get(Math.floor(Math.random() * randomizer.size));
        randomizer.remove(region);
        e.set(region);
    });
});
